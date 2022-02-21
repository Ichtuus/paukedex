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
import { PokeApp } from "../view/poke-app";
@customElement("poke-search")
export class PokeSearch extends LitElement {
  @property({ type: Boolean })
  isSearch: boolean = false;

  toggleWrapClass: ClassInfo = {};

  pokemon: any = {};

  static get styles() {
    return [pokeSearchStyle];
  }

  constructor(private $el: HTMLElement) {
    super();
  }

  async searchPokemon() {
    let existingCache!: Pokemon;

    let currentResearch = (<HTMLInputElement>(
      this.shadowRoot?.querySelector(".search-field")
    )).value;

    console.log(navigator.language);
    // Translate user research in to english word because Pokeapi just support english language
    if (hasFrBrowser(navigator.language)) {
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
      const response = await pokemonApi.getPokemon();
      console.log(response);
      neededPokemon = this.getCurrentResearch(
        response,
        currentResearch.toLowerCase()
      );
    }

    const pokemon = await pokemonApi.getPokemonSpecies(neededPokemon[0].name);

    // this.isSearch = true;
    this.toggleWrapClass = { toggleWrap: (this.isSearch = true) };

    // Create cache if not exist
    if (!(await caches.has("pokemon"))) {
      cache.createCache(PokeApiUrls.ALL_POKEMON, "pokemon");
    }

    this.pokemon = pokemon;

    console.log("pokemon", pokemon);
  }

  getCurrentResearch(existing: any, current: any) {
    console.log(current);
    try {
      console.log(
        "icicic",
        existing.results.filter((pokemon: any) => pokemon.name == current)
      );
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
