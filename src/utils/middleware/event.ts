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

const eventType = {
    TOGGLE_DRAWER: 'TOGGLE_DRAWER',
}

export class StoreEvent {
    state: { isDrawerOpen: boolean } = { isDrawerOpen: false }
    listeners: Array<any> = []
    constructor() {}

    getState() {
        return this.state
    }

    dispatch(action: any) {
        switch (action.type) {
            case eventType.TOGGLE_DRAWER:
                this.state = {
                    ...this.state,
                    isDrawerOpen: !this.state.isDrawerOpen,
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
