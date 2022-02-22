import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ClassInfo, classMap } from "lit/directives/class-map.js";

import { pokeSearchStyle } from "./poke-search.css";
import pokemonApi from "../../api/pokemon/index";
import { Pokemon } from "../../types/pokeapi";
import { enToFrPokemonName, frToEnPokemonName } from "../../utils/pokemon-name";
import { detectLanguage, hasFrBrowser } from "../../utils/iso-language";
import { PokeApiUrls } from "../../api/pokemon/urls";
import cache from "../../api/pokemon/cache";

@customElement("poke-search")
export class PokeSearch extends LitElement {
  @property({ type: Boolean })
  isSearch: boolean = false;
  toggleWrapClass: ClassInfo = {};

  static get styles() {
    return [pokeSearchStyle];
  }

  constructor() {
    super();
  }

  async searchPokemon() {
    let existingCache!: Pokemon;

    let currentResearch = (<HTMLInputElement>(
      this.shadowRoot?.querySelector(".search-field")
    )).value;

    console.info(`Navigator language: ${navigator.language}`);
    // Translate user research in to english word because Pokeapi just support english language
    if (hasFrBrowser(navigator.language)) {
      // TODO to be improve
      if (detectLanguage(currentResearch)?.en) {
        // Needed if user use english translation with fr browser
        const { fr }: any = enToFrPokemonName(currentResearch);
        currentResearch = fr;
      }
      const { en }: any = frToEnPokemonName(currentResearch);
      currentResearch = en;
    }

    // Promise to get cache
    cache.getCacheIfExist(PokeApiUrls.ALL_POKEMON, "pokemon").then((cache) => {
      if (cache) {
        existingCache = cache;
      }
    });

    let neededPokemon = [];

    // Optimize ressource api call with caching system
    if (existingCache) {
      neededPokemon = this.getCurrentResearch(
        existingCache,
        currentResearch.toLowerCase()
      );
    } else {
      neededPokemon = await pokemonApi.getOnePokemon(
        currentResearch.toLowerCase()
      );
    }

    this.toggleWrapClass = { toggleWrap: (this.isSearch = true) };

    // Create cache if not exist
    // Improve to cache all new research
    if (!(await caches.has("onepokemon"))) {
      cache.createCache(
        `${PokeApiUrls.ONE_POKEMON}${currentResearch.toLowerCase()}`,
        "onepokemon"
      );
    }

    this.dispatchEvent(
      new CustomEvent("getPokemon", { detail: neededPokemon, composed: true })
    );
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
          <form role="search" method="get" class="search-form form" action="">
            <label>
              <span class="screen-reader-text">Search for...</span>
              <input
                type="search"
                class="search-field"
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
          </form>
        </div>
      </div>
    `;
  }
}
