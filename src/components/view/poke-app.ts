import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { when } from 'lit/directives/when.js';
import { until } from 'lit/directives/until.js'

import '../poke-search/poke-search'
import '../poke-card/poke-card'
import '../poke-all/poke-all'

import { Encounter } from '../../types/pokeapi/Encounter'
import { storeEventConst } from '../../index';

@customElement('poke-app')
export class PokeApp extends LitElement {
	@property() pokemon!: any
	@property() moves!: any
	@property() encounters!: Encounter
    @property({ type: Boolean }) searchActivated = false

	constructor() {
		super()
	}

	render() {
		return html`   
			<poke-search></poke-search>
			${when(this.searchActivated === true, () => html` <poke-all ?hidden="${this.searchActivated}"></poke-all> `)}
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

		storeEventConst.subscribe( () => {
            const state = storeEventConst.getState();
			if (state.hasOwnProperty('searchActivated') && state.searchActivated) {
                this.searchActivated = state.searchActivated
            }
        })
	}
}
