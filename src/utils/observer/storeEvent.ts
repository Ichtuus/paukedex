/**
 *
 * Dispatch event :
 *
 *    storeEventConst.dispatch({ type: 'TOGGLE_DRAWER' })
 *
 *
 * Subscribe event :
 *
 *    storeEventConst.subscribe(() => {
 *     const state = storeEventConst.getState();
 *     console.log(state);
 *   })
 *
 */

export const eventType = {
  TOGGLE_DRAWER: 'TOGGLE_DRAWER',
  IS_SEARCH_ACTIVATED: 'IS_SEARCH_ACTIVATED',
  UPDATER: 'UPDATER',
  RANDOM_POKEMON: 'RANDOM_POKEMON',
}

type storeEventStateT = {
  isDrawerOpen: boolean
  searchActivated: boolean
  updater: any
  randomPokemon: object
}

const storeEventStateV = {
  isDrawerOpen: false,
  searchActivated: true,
  updater: null,
  randomPokemon: { fr: '', en: '' },
}

export class StoreEvent {
  state: storeEventStateT = storeEventStateV
  listeners: Array<any> = []

  constructor() {}

  getState(): storeEventStateT {
    return this.state
  }

  dispatch(action: { type: string; data: any }) {
    switch (action.type) {
      case eventType.TOGGLE_DRAWER:
        this.state = {
          ...this.state,
          isDrawerOpen: !this.state.isDrawerOpen,
        }
        break
      case eventType.UPDATER:
        this.state = {
          ...this.state,
          updater: (this.state.updater = action.data),
        }
        break
      case eventType.IS_SEARCH_ACTIVATED:
        this.state = {
          ...this.state,
          searchActivated: (this.state.searchActivated = action.data),
        }
        break
      case eventType.RANDOM_POKEMON:
        this.state = {
          ...this.state,
          randomPokemon: (this.state.randomPokemon = action.data),
        }
        break
      default:
        break
    }
    this.listeners.forEach((listener) => listener())
  }

  subscribe(listener: Function) {
    this.listeners.push(listener)
  }
}
