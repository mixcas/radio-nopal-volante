import { combineReducers } from 'redux'

import flyerReducer from 'reducers/flyerReducer'

// Setup root reducer
const rootReducer = combineReducers({
	flyer: flyerReducer,
})

export default rootReducer
