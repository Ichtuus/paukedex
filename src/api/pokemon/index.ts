import { Pokemon } from '@/types/pokeapi'
import { PokeApiUrls } from './urls'

async function getAllPokemon(): Promise<Pokemon> {
	console.log('getPokemon api')
	return await fetch(PokeApiUrls.ALL_POKEMON).then((response: any) => {
		return response.json()
	})
}

async function getOnePokemon(name: string) {
	console.info('getOnePokemon api')
	return await fetch(`${PokeApiUrls.ONE_POKEMON}${name.toLowerCase()}`).then(
		(response: any) => {
			console.log('response data =>', response)
			return response.json()
		}
	)
}

async function getPokemonMoves(
	moves: {
		move: { name: string; url: string }
		version_group_details: []
	}[]
): Promise<any> {
	return Promise.all(
		moves.map((url: any) => {
			return fetch(url.move.url).then((response) => {
				return response.json()
			})
		})
	)
		.then((values) => {
			return values
		})
		.catch(console.error.bind(console))
}

async function getPokemonEncounters(url: string): Promise<any>
{
	return await fetch(url).then(
		(response: any) => {
			return response.json()
		}
	)
}

async function getPokemonSpecies(name: string) {
	console.info('getPokemonSpecies api')
	return await fetch(`${PokeApiUrls.POKEMON_SPECIES}${name}`).then(
		(response: any) => {
			return response.json()
		}
	)
}

export default {
	getAllPokemon,
	getOnePokemon,
	getPokemonSpecies,
	getPokemonMoves,
	getPokemonEncounters
}
