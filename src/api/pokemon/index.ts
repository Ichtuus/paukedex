import { Pokemon } from "@/types/pokeapi";
import { PokeApiUrls } from "./urls";

async function getAllPokemon(): Promise<Pokemon> {
  console.log("getPokemon api");
  return await fetch(PokeApiUrls.ALL_POKEMON).then((response: any) => {
    return response.json();
  });
}

async function getOnePokemon(name: string) {
  return await fetch(`${PokeApiUrls.ONE_POKEMON}${name}`).then(
    (response: any) => {
      return response.json();
    }
  );
}

async function getPokemonSpecies(name: string) {
  console.log("getPokemonSpecies api");
  return await fetch(`${PokeApiUrls.POKEMON_SPECIES}${name}`).then(
    (response: any) => {
      return response.json();
    }
  );
}

export default {
  getAllPokemon,
  getOnePokemon,
  getPokemonSpecies,
};
