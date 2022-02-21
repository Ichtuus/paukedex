import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { pokeCardStyle } from "./poke-card.css";

@customElement("poke-card")
export class PokeCard extends LitElement {
  @property() pokemon!: string;

  static get styles() {
    return [pokeCardStyle];
  }

  constructor() {
    super();
  }

  connectedCallback(): void {
    console.log("test", this.pokemon);
  }

  render() {
    return html`
      <div class="pokecard-body">
        <div class="pokeball">${this.pokemon}</div>
      </div>
    `;
  }
}
