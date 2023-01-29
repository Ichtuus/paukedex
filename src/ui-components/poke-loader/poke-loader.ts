import { LitElement, html, CSSResultGroup, css } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import style from './poke-loader.scss'

@customElement('poke-loader')
export class PokeLoader extends LitElement {
	static styles = css`
		${style as unknown as CSSResultGroup}
	`

	@property({ type: String }) isVisible!: string

	constructor() {
		super()
	}

	render() {
        return html`
        <div class="poke-loader ${this.isVisible ? 'is-visible' : ''}" ${this.isVisible ? "disabled" : ''}>
            <div class="bounce1"></div>
            <div class="bounce2"></div>
            <div class="bounce3"></div>
        </div>

		`
	}
}
