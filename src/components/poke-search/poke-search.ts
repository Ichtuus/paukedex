import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ClassInfo, classMap } from "lit/directives/class-map.js";

import { pokeSearchStyle } from "./poke-search.css";
import pokemonApi from "../../api/pokemon/index";
import { Pokemon } from "../../types/pokeapi";
import { enToFrPokemonName, frToEnPokemonName } from "../../utils/pokemon-name";
import { detectLanguage, FR_ISO_LANGUAGE, hasEnBrowser, hasFrBrowser } from "../../utils/iso-language";
import { PokeApiUrls } from "../../api/pokemon/urls";
import cache from "../../api/pokemon/cache";

export enum ErrorTypeE {
  NOTEXIST = 'notExist'
}
@customElement("poke-search")
export class PokeSearch extends LitElement {
  @property({ type: Boolean })
  isSearch: boolean = false;
  @property() searchError: string | undefined = "";
  toggleWrapClass: ClassInfo = {};
  currentResearch: string = "";
  static get styles() {
    return [pokeSearchStyle];
  }

  constructor() {
    super();
  }

  async searchPokemon(e: any) {
    if (e.keyCode != 13 && e.type != "click") {
      return;
    }

    let existingCache!: Pokemon;
    this.currentResearch = (<HTMLInputElement>(
      this.shadowRoot?.querySelector(".search-field")
    )).value;

    console.info(`Navigator language: ${navigator.language}`);
    // Translate user research in to english word because Pokeapi just support english language
    if (hasFrBrowser(navigator.language)) {
      this.manageResearch(this.currentResearch);
    }

    if (hasEnBrowser(navigator.language)) { 
      this.manageResearch(this.currentResearch);
    }

    // Promise to get cache
    cache
      .getCacheIfExist(
        `${PokeApiUrls.ONE_POKEMON}${this.currentResearch.toLowerCase()}`,
        this.currentResearch.toLowerCase()
      )
      .then((cache) => {
        if (cache) {
          console.info("existing cache", cache);
          existingCache = cache;
        }
      });

    let neededPokemon = [];

    // Optimize ressource api call with caching system
    if (existingCache) {
      neededPokemon = this.getCurrentResearch(
        existingCache,
        this.currentResearch.toLowerCase()
      );
    } else {
      neededPokemon = await pokemonApi.getOnePokemon(
        this.currentResearch.toLowerCase()
      );
    }

    this.toggleWrapClass = { toggleWrap: (this.isSearch = true) };

    // Create cache if not exist
    if (!(await caches.has(this.currentResearch.toLowerCase()))) {
      console.log(`cache does not exist for ${this.currentResearch.toLowerCase()}`);
      cache.createCache(
        `${PokeApiUrls.ONE_POKEMON}${this.currentResearch.toLowerCase()}`,
        this.currentResearch.toLowerCase()
      );
    }

    this.dispatchEvent(
      new CustomEvent("getPokemon", { detail: neededPokemon, composed: true })
    );
  }


  manageResearch(research: string) {
    if (detectLanguage(research)?.en) {
      // Needed if user use english translation with fr browser
      try {
        const { fr }: any = enToFrPokemonName(research);
        this.currentResearch = fr;  
      } catch (e) {
        console.error('error', e)
        this.getErrorMsg(research, ErrorTypeE.NOTEXIST, navigator.language);
      }
    }

    if (detectLanguage(research)?.fr) {
      // Needed if user use french translation with en browser
      try {
        const { en }: any = frToEnPokemonName(research);
        this.currentResearch = en;
      } catch (e) {
        console.error('error', e)
        this.getErrorMsg(research, ErrorTypeE.NOTEXIST, navigator.language);
      }
    }
  }

  getErrorMsg(name: string, type: string, lang: string) {
    import('../../i18n/lang.json')
    .then((response: any) => this.searchError = `${name} ${response[lang].error[type]}`)
    .catch(error => console.error('error', error));
  }

  getCurrentResearch(existing: any, current: any) {
    try {
      return existing.results.filter((pokemon: any) => pokemon.name == current);
    } catch (error) {
      console.error("Something wen't wrong when research pokemon", error);
    }
  }

  render() {
    return html`
      <div class="pokesearch-body ${classMap(this.toggleWrapClass)}">
        <div class="container">
          <div class="search-form form">
            <label>
              <input
                type="search"
                class="search-field"
                @keypress="${this.searchPokemon}"
                placeholder="Type something..."
                value=""
              />
            </label>
            <button
              type="button"
              @click="${this.searchPokemon}"
              class="search-submit button"
            >
              GO
            </button>
          </div>
          <p class="pokesearch-error">${this.searchError}</p>
        </div>
      </div>
    `;
  }
}
