import { combineReducers } from 'redux'
import locationReducer from './reducer-location'

const rootReducer = combineReducers({
    forecast: locationReducer,
})

export default rootReducer
