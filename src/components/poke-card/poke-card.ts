import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ClassInfo, classMap } from "lit/directives/class-map.js";

import { pokeCardStyle } from "./poke-card.css";

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

  requestUpdate() {
    super.requestUpdate();
    console.log("requestUpdate");
    if (this.pokemon) {
      this.hasPokemonClass = { hasPokemon: (this.hasPokemon = true) };
    }
  }

  render() {
    return html`
      <div class="pokecard-body ${classMap(this.hasPokemonClass)}">
        <div class="pokeball">
          <img src="${this.pokemon?.sprites.other.dream_world.front_default}" />
        </div>
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
