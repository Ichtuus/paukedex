import './components/styles/global.css'

import './components/view/poke-app'
import { StoreEvent } from './utils/observer/storeEvent'

import './api/pokemon/serviceWorkerApi'

// store application state
export const storeEventConst = new StoreEvent()
