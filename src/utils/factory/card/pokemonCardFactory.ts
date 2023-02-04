import { MovesFactory } from "./moves/movesFactory"

export class PokemonCardFactory {
    mf:any;
        
    create(type: string, data: any) {
        switch (type) {
            case 'moves': return this.mf = new MovesFactory(data)
            case 'encounters': console.log('encounters pokemon card factory')
            default:
                throw new DOMException('Wrong type passed')
        }
    }

    getMf() {
        return this.mf
    }
}