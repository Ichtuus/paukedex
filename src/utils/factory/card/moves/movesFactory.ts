import { html } from "lit";
import { PokemonCard } from "../pokemonCardInterface";

export class MovesFactory implements PokemonCard  {
    constructor(moves: []) {
        this.moves = moves
        console.log('movesactory')
    }

    title!: string;
    description!: string;
    image?: string | undefined;

    moves: any;


	getPokemonMoves() {
		if (this.hasMoves()) {
			const movenames = this.moves
				.map((move: any) => this.arrayMethodFilterBylang(move.names, 'filter'))
				.flat()
			return html`
				<label for="pokemonMoves">Competence: </label>
				<select @change="${(e: any) => this.onChange(e)}" id="pokemonMoves" name="pokemonMoves">
					${movenames.map(
						(name: any) => html`
							<option value="${name.name}">${name.name}</option>
						`
					)}
				</select>
			`
		}
    }
    
	arrayMethodFilterBylang(array: any, methodArray: string, key?: any) {
		return key
			? array[methodArray]((item: any) => item.language.name == 'fr')[key]
			: array[methodArray]((item: any) => item.language.name == 'fr')
    }
    
    hasMoves() {
		return this.moves && this.moves.length > 0 ? true : false
    }
    
    onChange(e: any) {
		console.log('event', e)
	}

}