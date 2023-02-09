import { html } from "lit";
import { PokemonCard } from "../pokemonCardInterface";
import { storeEventConst } from "../../../../index";
import { map } from "lit/directives/map.js";
import { Encounter } from "../../../../types/pokeapi/Encounter";

export class EncountersFactory implements PokemonCard  {
    constructor(encounters: Encounter[]) {
        this.encounters = encounters
    }

    title!: string;
    description!: string;
    image?: string | undefined;
    encounters!: Encounter[];
    

    getEncounters() {
        const data = html`
        <ul>
            ${map(this.encounters, (encounter: Encounter, index: number) => {
                return html`<li>${encounter.location_area.name}</li>`
            })}
        </ul>
        `

        return data
    }
}