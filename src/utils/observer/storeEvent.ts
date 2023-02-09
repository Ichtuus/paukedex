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
	UPDATER: 'UPDATER'
}

export class StoreEvent {
	state: { isDrawerOpen: boolean, updater: any } = { isDrawerOpen: false, updater: null }
	listeners: Array<any> = []
	
	constructor() {}

	getState() {
		return this.state
	}

	dispatch(action: { type: string, data: any }) {
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
						updater: this.state.updater = action.data,
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
