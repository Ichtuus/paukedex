import { EncountersFactory } from "./encounters/encountersFactory";
import { MovesFactory } from "./moves/movesFactory"

export class PokemonCardFactory {
    mf:any;
    ef: any;

    create(type: string, data: any) {
        switch (type) {
            case 'moves': return this.mf = new MovesFactory(data)
            case 'encounters': return this.ef = new EncountersFactory(data)
            default:
                throw new DOMException('Wrong type passed')
        }
    }

    getMovesFactory() {
        return this.mf
    }

    getEncountersFactory() {
        return this.ef
    }
}