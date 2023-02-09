import { LitElement, html, CSSResultGroup, css } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { ClassInfo, classMap } from 'lit/directives/class-map.js'
import { until } from 'lit/directives/until.js'
import style from './poke-card.scss'

import fallbackImg from '../../assets/images/onepiece.png'
import { Encounter } from '../../types/pokeapi/Encounter'
import { PokemonCardFactory } from '../../utils/factory/card/pokemonCardFactory'
import { storeEventConst } from '../../index'

//UI components imports
import '../../ui-components/poke-loader/poke-loader'

@customElement('poke-card')
export class PokeCard extends LitElement {
	@property() pokemon!: any
	@property() moves!: any
	@property() encounters!: Encounter
	@property({ type: Boolean }) showLoader!: any

	hasPokemon: boolean = false
	hasPokemonClass: ClassInfo = {}
	currentMoove!: any
	
	pokemonCardFactory: any = new PokemonCardFactory();

	static styles = css`
		${style as unknown as CSSResultGroup}
	`

	constructor() {
		super()
	}

	connectedCallback(): void {
		// Needed to have rendering
		super.connectedCallback()
	}

	// Detect if props is update by the parent
	requestUpdate() {
		super.requestUpdate()
		if(this.moves) {
			this.pokemonCardFactory.create('moves', this.moves)
		}

		if(this.encounters) {
			this.pokemonCardFactory.create('encounters', this.encounters)
		}


		if (this.pokemon) {
			this.hasPokemonClass = { hasPokemon: this.hasPokemon = true }
		}
	}

	arrayMethodFilterBylang(array: any, methodArray: string, key?: any) {
		return key
			? array[methodArray]((item: any) => item.language.name == 'fr')[key]
			: array[methodArray]((item: any) => item.language.name == 'fr')
	}

	getPokemonEncounters() {
		if (this.showLoader) {
			return html`<poke-loader .isVisible="${this.showLoader}"></poke-loader>`
		} else {
			if (this.moves) {
				return this.pokemonCardFactory.ef.getEncounters()
			}
		}
	
	}

	dynamicDisplayPokemonMoves() {
		if (this.moves) {
			const template = this.pokemonCardFactory.mf.getPokemonMoveDetail()
			storeEventConst.subscribe(() => {
				super.requestUpdate()
			})
			return template	
		}
	}

	render() {
		return html`
			<div class="ds-container pokecard-body ${classMap(this.hasPokemonClass)}">
				<div class="ds-flex">
					<div class="pokecard-stats ds-col__12-s ds-col__5-l">

						${this.moves ? this.pokemonCardFactory.mf.getPokemonMoves() : "rien dans les moves"}
				
						${until(this.dynamicDisplayPokemonMoves())}
					</div>
					<div class="pokeball ds-col__6-s ds-col__2-l">
						<img
							class="pokeball-pokemonImg"
							src="${this.pokemon?.sprites.other.dream_world.front_default
								? this.pokemon?.sprites.other.dream_world.front_default
								: this.pokemon?.sprites.other.home.front_default}"
							alt="${this.pokemon?.name}"
							onerror="this.onerror=null;this.src='${fallbackImg}';" />
					</div>
					<div class="pokecard-stats ds-col__12-s ds-col__5-l">
						${until(this.getPokemonEncounters())}
					</div>
				</div>
			</div>
		`
	}
}
