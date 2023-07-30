import { CSSResultGroup, LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { map } from 'lit/directives/map.js'
import style from './poke-all.scss'

// API
import pokemonApi from '../../api/pokemon/index'

import '../poke-search/poke-search'
import '../poke-card/poke-card'
import { enToFrPokemonName } from '../../utils/pokemon-name'

enum previous_next {
  NEXT = 'next',
  PREVIOUS = 'previous',
}

export enum pagination {
  LIMIT_OFFSET = 20,
}

@customElement('poke-all')
export class PokeAll extends LitElement {
  @property() pokemonall!: any
  @property() nextPage: string = ''
  @property() previousPage: string = ''
  offset: any = Math.floor(Math.random() * 64) * 20

  static styles = css`
    ${style as unknown as CSSResultGroup}
  `

  constructor() {
    super()
  }

  render() {
    if (this.pokemonall) {
      return html`
        <ul class="pokeall">
          <li
            tabindex="0"
            @click="${() => this.pokemonByPageHandler(previous_next.PREVIOUS)}"
            class="pokeall-showless">
            show less
          </li>
          ${map(this.pokemonall.results, (pokemon: any, index: number) => {
            return html`<li
              tabindex="0"
              class="pokeall-item"
              title="${pokemon.name}">
              ${enToFrPokemonName(pokemon.name)}
            </li>`
          })}
          <li
            tabindex="0"
            @click="${() => this.pokemonByPageHandler(previous_next.NEXT)}"
            class="pokeall-showmore">
            show more
          </li>
        </ul>
      `
    }
  }

  pokemonByPageHandler(mode: previous_next.NEXT | previous_next.PREVIOUS) {
    this.extractOffsetAndUpdatePage(mode)
  }

  async extractOffsetAndUpdatePage(
    mode: previous_next.NEXT | previous_next.PREVIOUS
  ) {
    let url = null
    mode === previous_next.NEXT
      ? (url = new URL(this.nextPage))
      : (url = new URL(this.previousPage))
    const urlParams = new URLSearchParams(url!.search)
    this.offset = urlParams.get('offset')
    this.pokemonall = await pokemonApi.getAllPokemon(
      this.offset,
      pagination.LIMIT_OFFSET
    )
    this.nextPage = this.pokemonall.next
    this.previousPage = this.pokemonall.previous
  }

  async connectedCallback() {
    super.connectedCallback()
    this.pokemonall = await pokemonApi.getAllPokemon(
      this.offset,
      pagination.LIMIT_OFFSET
    )
    this.nextPage = this.pokemonall.next
    this.previousPage = this.pokemonall.previous
  }
}
