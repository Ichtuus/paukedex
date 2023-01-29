import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import '../poke-search/poke-search'
import '../poke-card/poke-card'

@customElement('poke-app')
export class PokeApp extends LitElement {
    @property() pokemon!: any
    @property() moves!: any

    constructor() {
        super()
    }

    render() {
        return html`
            <poke-search></poke-search>
            <poke-card
                .pokemon="${this.pokemon}"
                .moves="${this.moves}"
            ></poke-card>
        `
    }

    firstUpdated() {
        this.addEventListener('getPokemon', (event: any) => {
            this.pokemon = event.detail
        })
        // if (this.moves.length > 0) {
        this.addEventListener('getPokemonMoves', (event: any) => {
            if (event.detail) {
                this.moves = event.detail
            }
        })
        // }
    }
}
