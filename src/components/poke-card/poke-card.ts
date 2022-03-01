import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ClassInfo, classMap } from "lit/directives/class-map.js";

import { pokeCardStyle } from "./poke-card.css";
import fallbackImg from "../../assets/images/onepiece.png";

import "../poke-stat/poke-stat";

@customElement("poke-card")
export class PokeCard extends LitElement {
  @property() pokemon!: any;

  hasPokemon: boolean = false;
  hasPokemonClass: ClassInfo = {};

  static get styles() {
    return [pokeCardStyle];
  }

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

  render() {
    return html`
      <div class="pokecard ${classMap(this.hasPokemonClass)}">
        <poke-stat id="one"></poke-stat>
        <poke-stat id="two"></poke-stat>

        <div class="pokecard-body">
          <div class="pokeball">
            <img
              src="${this.pokemon?.sprites.other.dream_world.front_default}"
              alt="${this.pokemon?.name}"
              onerror="this.onerror=null;this.src='${fallbackImg}';"
            />
          </div>
        </div>

        <poke-stat id="three"></poke-stat>
        <poke-stat id="four"></poke-stat>
      </div>
    `;
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
