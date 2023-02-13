import { html } from "lit";
import { PokemonCard } from "../pokemonCardInterface";
import { storeEventConst } from "../../../../index";
import { map } from "lit/directives/map.js";
import { eventType } from "../../../../utils/observer/storeEvent";

export class MovesFactory implements PokemonCard  {
    constructor(moves: []) {
        this.moves = moves
    }

    title!: string;
    description!: string;
    image?: string | undefined;
    moves: any;
    currentMoove!: any
    selectElement!: any
    
    
    getPokemonMoves() { 
		if (this.hasMoves()) {
			const movenames = this.moves
				.map((move: any) => this.arrayMethodFilterBylang(move.names, 'filter'))
                .flat()
           
            const data = html`
				<label for="pokemonMoves">Competence: </label>
				<select id="pokemonMoves" name="pokemonMoves" @change="${(e: any) => this.onChange(e)}">

                    ${map(movenames, (move: any, index: number) => {
                        return html`<option value="${move.name}">${move.name}</option>` 
                    })}
				</select>
			`
            return data
		}
    }
    
    getPokemonMoveDetail() {
        if (this.hasMoves()) {
            this.selectElement = this.selectElement ? this.selectElement : this.moves[0]
            if (this.selectElement) {
                this.currentMoove = this.selectElement
                return html`
                    <ul>
                        <li title="name: ${this.currentMoove.name}">${this.currentMoove.name}</li>
                        <li title="accuracy: ${this.currentMoove.accuracy}">${this.currentMoove.accuracy}</li>
                        <li title="damage class: ${this.currentMoove.damage_class.name}">${this.currentMoove.damage_class.name}</li>
                        <li title="attack description: ${this.arrayMethodFilterBylang(this.currentMoove.flavor_text_entries,'find','flavor_text')}">
                            ${this.arrayMethodFilterBylang(
                                this.currentMoove.flavor_text_entries,
                                'find',
                                'flavor_text'
                            )}
                        </li>
                        <li title="ailment: ${this.currentMoove.meta.ailment.name}">
                            ${this.currentMoove.meta.ailment.name != 'none'
                                ? this.currentMoove.meta.ailment.name
                                : null}
                        </li>
                        <li title="power: ${this.currentMoove.power}">${this.currentMoove.power}</li>
                        <li title="PP: ${this.currentMoove.pp}">${this.currentMoove.pp}</li>
                    </ul>
                `
            }
		}
    }
    
	arrayMethodFilterBylang(array: any, methodArray: string, key?: any) {
		return key
			? array[methodArray]((item: any) => item.language.name == 'fr')[key]
			: array[methodArray]((item: any) => item.language.name == 'fr')
    }
    
    hasMoves() {
		return this.moves && this.moves.length > 0 
    }
    
    onChange(e: any) { 
        this.selectElement = this.moves.find((move: any) => { 
            return move.names.find((name: any) => {
            return name.name == e.target.value
            })
        })
        storeEventConst.dispatch({ type: eventType.UPDATER, data: this.selectElement })
        this.getPokemonMoveDetail()
	}

}