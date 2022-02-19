import { LitElement, html, customElement, property } from "lit-element";
import { style } from "../styles/poke-search";
import pokemonApi from "../api/pokemon/index";
import { Pokemon } from "../types/pokeapi";
import { enToFrPokemonName, frToEnPokemonName } from "../utils/pokemon-name";
import { detectLanguage, hasFrBrowser } from "../utils/iso-language";
import { PokeApiUrls } from "../api/pokemon/urls";
import cache from "../api/pokemon/cache";

@customElement("poke-search")
//@ts-ignore
export class HelloWorld extends LitElement {
  @property({ type: String }) title: string = "default title";
  @property({ type: String }) description: string = "default description";

  static get styles() {
    return [style];
  }

  constructor(private $el: HTMLElement) {
    super();
  }

  async searchPokemon(e: any) {
    let existingCache!: Pokemon;

    let currentResearch = (<HTMLInputElement>(
      this.shadowRoot?.querySelector(".search-field")
    )).value;

    // Translate user research in to english word because Pokeapi just support english language
    if (hasFrBrowser(navigator.language)) {
      const { en }: any = frToEnPokemonName(currentResearch);
      currentResearch = en;
      if (detectLanguage(currentResearch)?.en) {
        // Needed if user use english translation with fr browser
        const { fr }: any = enToFrPokemonName(currentResearch);
        currentResearch = fr;
      }
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
      neededPokemon = this.getCurrentResearch(
        response,
        currentResearch.toLowerCase()
      );
    }

    const pokemon = await pokemonApi.getPokemonSpecies(neededPokemon[0].name);

    // Create cache if not exist
    if (!(await caches.has("pokemon"))) {
      cache.createCache(PokeApiUrls.ALL_POKEMON, "pokemon");
    }
    console.log("pokemon", pokemon);
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
      <div class="wrapper">
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
