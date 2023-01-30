//Lit core
import { LitElement, html, css, CSSResultGroup } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { until } from 'lit/directives/until.js'

// API
import pokemonApi from '../../api/pokemon/index'
import { Pokemon } from '../../types/pokeapi'
import { PokeApiUrls } from '../../api/pokemon/urls'

// Utils
import { enToFrPokemonName, frToEnPokemonName } from '../../utils/pokemon-name'
//  { detectLanguage, FR_ISO_LANGUAGE, hasEnBrowser, hasFrBrowser } from "../../utils/iso-language";
import { IsoLanguage } from '../../utils/iso-language'
import cache from '../../api/pokemon/cache'
import style from './poke-search.scss'
import pokeball from '../../assets/images/hyperball.png'

//UI components imports
import '../../ui-components/poke-loader/poke-loader'

export enum ErrorTypeE {
	NOTEXIST = 'notExist',
}

const NBR_SHOW_POKEMON = 5;

@customElement('poke-search')
export class PokeSearch extends LitElement {
	@property() searchError: string | undefined = ''
	@property() moves!: {}[]
	@property({ type: String }) pokeball = './hyperball.png'
	@property({ type: Boolean }) toggleWrapClass = false
	@property({ type: Boolean }) showLoader = false;
	@property({ type: Boolean }) showMoreCachePokemon = false
	isSearch: boolean = false
	currentCache: any
	currentResearch: string | undefined = ''
	IsoLanguage = new IsoLanguage()

	static styles = css`
		${style as unknown as CSSResultGroup}
	`

	constructor() {
		super()
	}

	async searchPokemon(e: any) {
		if (e.keyCode != 13 && e.type != 'click') {
			return
		}

		this.showLoader = true

		let existingCache!: Pokemon
		this.currentResearch = (<HTMLInputElement>(
			this.shadowRoot?.querySelector('.pokesearch-form-field')
		)).value

		console.info(`Navigator language: ${navigator.language}`)
		// Translate user research in to english word because Pokeapi just support english language
		if (this.IsoLanguage.hasFrBrowser(navigator.language)) {
			this.manageResearch(this.currentResearch)
		}

		if (this.IsoLanguage.hasEnBrowser(navigator.language)) {
			this.manageResearch(this.currentResearch)
		}

		// Promise to get cache
		cache
			.getCacheIfExistByUrl(
				`${PokeApiUrls.ONE_POKEMON}${this.currentResearch.toLowerCase()}`,
				this.currentResearch.toLowerCase()
			)
			.then((cache) => {
				if (cache) {
					console.info('existing cache', cache)
					existingCache = cache
				}
			})

		// console.log('check before', this.currentResearch, 'other',existingCache)
		let neededPokemon: any = []

		// Optimize ressource api call with caching system
		if (existingCache) {
			neededPokemon = this.getCurrentResearch(
				existingCache,
				this.currentResearch.toLowerCase()
			)
		} else {

			neededPokemon = await pokemonApi.getOnePokemon(
				this.currentResearch.toLowerCase()
			)
			this.moves = await pokemonApi.getPokemonMoves(neededPokemon.moves)
			this.showLoader = false

		}

		this.toggleWrapClass = true
		// if (this.isSearch) {
		// 	console.log('ici')
		// 	super.requestUpdate()
		// }

		// Create cache if not exist
		if (!(await caches.has(this.currentResearch.toLowerCase()))) {
			console.log(
				`cache does not exist for ${this.currentResearch.toLowerCase()}`
			)
			cache.createCache(
				`${PokeApiUrls.ONE_POKEMON}${this.currentResearch.toLowerCase()}`,
				this.currentResearch.toLowerCase()
			)
		}

		this.dispatchEvent(
			new CustomEvent('getPokemon', {
				detail: neededPokemon,
				composed: true,
			})
		)
		this.dispatchEvent(
			new CustomEvent('getPokemonMoves', {
				detail: this.moves,
				composed: true,
			})
		)
	}

	manageResearch(research: string) {
		if (this.IsoLanguage.detectLanguage(research)?.en) {
			// Needed if user use english translation with fr browser
			try {
				this.currentResearch = enToFrPokemonName(research)
			} catch (e) {
				console.error('error', e)
				this.getErrorMsg(research, ErrorTypeE.NOTEXIST, navigator.language)
			}
		}

		if (this.IsoLanguage.detectLanguage(research)?.fr) {
			// Needed if user use french translation with en browser
			try {
				this.currentResearch = frToEnPokemonName(research)
			} catch (e) {
				console.error('error', e)
				this.getErrorMsg(research, ErrorTypeE.NOTEXIST, navigator.language)
			}
		}
	}

	getErrorMsg(name: string, type: string, lang: string) {
		const regex = /(-[A-Z]+)/gm
		import('../../i18n/lang.json')
			.then(
				(response: any) =>
					(this.searchError = `${name} ${
						response[lang.replace(regex, '')].error[type]
					}`)
			)
			.catch((error) => console.error('error', error))
	}

	getCurrentResearch(existing: any, current: any) {
		try {
			return existing.results.filter((pokemon: any) => pokemon.name == current)
		} catch (error) {
			console.error("Something wen't wrong when research pokemon", error)
		}
	}

	async displayLastResearch() {
		let currentCacheFormatted: Array<string> = []
		let currentCacheOtherResult: Array<string> = []

		this.currentCache = await cache.getAllCacheKey()
		if (!this.showMoreCachePokemon) {
			currentCacheFormatted = this.currentCache.slice(0, NBR_SHOW_POKEMON)
			currentCacheOtherResult = this.currentCache.slice(NBR_SHOW_POKEMON, this.currentCache.length)
		} else {
			currentCacheFormatted = this.currentCache
		}
	
		console.log('d', this.currentCache)
		return html`
			<ul class="pokesearch-lastresearch">
				${currentCacheFormatted.map(
					(pokemonName: string) =>
						html` <li
							class="pokesearch-lastresearch-pokemon"
							@click="${() => this.submitResearchByCache(pokemonName)}">
							${enToFrPokemonName(pokemonName)}
						</li>`
				)}
				<li class="poke-showmore" style="color: white" @click="${() => this.showMore(currentCacheOtherResult)}">...</li>
			</ul>
		`
	}

	showMore(other: Array<string>) {
		if (other.length) {
			this.shadowRoot?.querySelector('.poke-showmore')?.remove()
			this.showMoreCachePokemon = true
		}
	} 

	submitResearchByCache(pokemoname: any) {
		cache
		.getCacheIfExistByUrl(
			`${PokeApiUrls.ONE_POKEMON}${pokemoname.toLowerCase()}`,
			pokemoname.toLowerCase()
		)
		.then(async (cache) => {
			if (cache) {
				console.info('existing cache from last research', pokemoname)
				const moves = await pokemonApi.getPokemonMoves(cache.moves)
				this.toggleWrapClass = true
				this.dispatchEvent(
					new CustomEvent('getPokemon', {
						detail: cache,
						composed: true,
					})
				)
				this.dispatchEvent(
					new CustomEvent('getPokemonMoves', {
						detail: moves,
						composed: true,
					})
				)
			}
		})
	}

	toggleSearchButtonLoaderVisibility() {
		if (this.showLoader) {
			return html`<poke-spinner .isVisible="${this.showLoader}"></poke-spinner>`
		} else {
			return html`
			<button
				type="button"
				@click="${this.searchPokemon}"
				class="pokesearch-form-submit">
				GO
			</button>
			`	
		}
	}

	render() {
		return html`
			<div
				class="pokesearch-body ${this.toggleWrapClass ? 'toggleWrap' : ''}">
				<div class="container">
					<h1 class="pokesearch-title">POKEDEX</h1>
					<div class="pokesearch-form form">
						<label class="pokesearch-form-label">
							<input
								type="search"
								class="pokesearch-form-field"
								@keypress="${this.searchPokemon}"
								placeholder="Type something..."
								value="" />
						</label>
						
						${this.toggleSearchButtonLoaderVisibility()}

					</div>
					<p class="pokesearch-form-error">${this.searchError}</p>
					${until(this.displayLastResearch())}
				</div>
			</div>
		`
	}
}
