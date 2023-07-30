import { POKEMON_NAME } from '../../utils/pokemon-name'
import { LitElement, html, CSSResultGroup, css } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { map, of } from 'rxjs'
import { storeEventConst } from '../../index'
import { eventType } from '../../utils/observer/storeEvent'

import style from './poke-random.scss'

@customElement('poke-random')
export class PokeRandom extends LitElement {
  static styles = css`
    ${style as unknown as CSSResultGroup}
  `

  constructor() {
    super()
  }

  render() {
    return html`
      <div class="poke-random-container" @click="${this.getRandomPokemon}">
        <div class="bg"></div>
        <div class="button"></div>
      </div>
    `
  }

  getRandomPokemon() {
    const pokemonObservable = of(POKEMON_NAME)
    const randomPokemonEnObservable = pokemonObservable.pipe(
      map((pokemonArray: any) => {
        const randomIndex = Math.floor(Math.random() * pokemonArray.length)
        return pokemonArray[randomIndex]
      })
    )

    randomPokemonEnObservable.subscribe((randomPokemon) => {
      storeEventConst.dispatch({
        type: eventType.RANDOM_POKEMON,
        data: randomPokemon,
      })
    })
  }
}
