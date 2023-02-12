import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import '../poke-search/poke-search'
import '../poke-card/poke-card'
import '../poke-all/poke-all'

import { Encounter } from '../../types/pokeapi/Encounter'

@customElement('poke-app')
export class PokeApp extends LitElement {
	@property() pokemon!: any
	@property() moves!: any
	@property() encounters!: Encounter

	constructor() {
		super()
	}

	render() {
		return html`   
			<poke-search></poke-search>
			<poke-all></poke-all>
			<poke-card .pokemon="${this.pokemon}" .moves="${this.moves}" .encounters="${this.encounters}"></poke-card>
		`
	}
 
	firstUpdated() {
		this.addEventListener('getPokemon', (event: any) => {
			this.pokemon = event.detail
		})
		this.addEventListener('getPokemonMoves', (event: any) => {
			if (event.detail) {
				this.moves = event.detail
			}
		})
		this.addEventListener('getPokemonEncounters', (event: any) => {
			this.encounters = event.detail
		})
	}
}
