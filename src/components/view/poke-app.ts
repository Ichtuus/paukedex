import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";

import "../poke-search/poke-search";
import "../poke-card/poke-card";

@customElement("poke-app")
export class PokeApp extends LitElement {
  @property({ reflect: true }) pokemon!: object;

  constructor() {
    super();
  }

  render() {
    return html`
      <poke-search></poke-search>
      <poke-card pokemon="test"></poke-card>
    `;
  }
}
