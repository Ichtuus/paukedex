import { LitElement, html, CSSResultGroup, css } from "lit";
import { customElement, property, query, queryAsync } from "lit/decorators.js";
import { ClassInfo, classMap } from "lit/directives/class-map.js";
import {until} from 'lit/directives/until.js';
import style from './poke-card.scss';

import fallbackImg from "../../assets/images/onepiece.png";

@customElement("poke-card")
export class PokeCard extends LitElement {
  @property() pokemon!: any;
  @property() moves!: any;
  @queryAsync('select') _selects!: any;
  
  hasPokemon: boolean = false;
  hasPokemonClass: ClassInfo = {};
  currentMoove!: any;

  static styles = css`${style as unknown as CSSResultGroup}`;

  constructor() {
    super();
  }

  connectedCallback(): void {
    // Needed to have rendering
    super.connectedCallback();
  }

  // Detect if props is update by the parent
  requestUpdate() {
    super.requestUpdate();
    if (this.pokemon) {
      this.hasPokemonClass = { hasPokemon: (this.hasPokemon = true) };
    }
  }

  getPokemonMoves() {
    if (this.hasMoves()) {
      const movenames = this.moves.map((move: any) => this.arrayMethodFilterBylang(move.names, 'filter')).flat()
      return html`
      <label for="pokemonMoves">Competence: </label>
      <select @change=${this.onChange} id="pokemonMoves" name="pokemonMoves">
        ${movenames.map((name: any) => html`
          <option value="${name.name}">${name.name}</option>
        `)}
      </select>
      `
    }
  }

  async getPokemonMoveDetail() {
    if (this.hasMoves()) {
      const selectElement = await this._selects
      this.currentMoove = this.moves.find((move: any) => move.names.find((name: any) => (name.name == selectElement.value)))

      return html`
      <ul>
        <li>${this.currentMoove.name}</li>
        <li>${this.currentMoove.accuracy}</li>
        <li>${this.currentMoove.damage_class.name}</li>
        <li>${this.arrayMethodFilterBylang(this.currentMoove.flavor_text_entries, 'find', 'flavor_text')}</li>
        <li>${(this.currentMoove.meta.ailment.name != 'none') ? this.currentMoove.meta.ailment.name : null }</li>
        <li>${this.currentMoove.power}</li>
        <li>${this.currentMoove.power}</li>
        <li>${this.currentMoove.pp}</li>
      </ul>
      `
    }
  }

  arrayMethodFilterBylang(array: any, methodArray: string, key?: any) {
    return key ? array[methodArray]((item: any) => item.language.name == 'fr')[key] : array[methodArray]((item: any) => item.language.name == 'fr')
  } 

  render() {
    return html`
      <div class="ds-container pokecard-body ${classMap(this.hasPokemonClass)}">  
        <div class="ds-flex">  
          <div class="pokecard-stats ds-col__12-s ds-col__5-l">
            ${this.getPokemonMoves()}
            ${until(
              this.getPokemonMoveDetail().then(response => response
                ? html`${response}`
                : html`pokemon move detail don't work fine`),
              html`Loading...`,
            )} 
          </div>
          <div class="pokeball ds-col__6-s ds-col__2-l">
            <img
              class="pokeball-pokemonImg"
              src="${this.pokemon?.sprites.other.dream_world.front_default ? this.pokemon?.sprites.other.dream_world.front_default : this.pokemon?.sprites.other.home.front_default}"
              alt="${this.pokemon?.name}"
              onerror="this.onerror=null;this.src='${fallbackImg}';"
            />
          </div>
          <div class="pokecard-stats ds-col__12-s ds-col__5-l">une chose</div>
        </div>
      </div>
    `;
  }

  hasMoves() {
    return (this.moves && this.moves.length > 0) ? true : false
  }

  onChange(e: any) {
    console.log('event', e)
    super.requestUpdate();
  }
  //   adoptedCallBack() {
  //   console.log("adoptedCallBack");
  // }

  // async attributeChangedCallback(e: any) {
  //   console.log("attributChangedCallBack");
  // }
  // hasChanged() {
  //   console.log("hasChanged");
  // }

  // update() {
  //   console.log("update");
  // }
  // updated() {
  //   console.log("updated");
  // }
}
