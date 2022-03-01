import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { pokeStatStyle } from "./poke-stat.css";

@customElement("poke-stat")
export class PokeStat extends LitElement {
  static get styles() {
    return [pokeStatStyle];
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
  }

  render() {
    return html` <div class="pokestat">Bulbizarre</div> `;
  }

  // Lifecycle
  // adoptedCallBack() {
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
