import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from 'reducers'
import thunk from 'redux-thunk'

const initialState = {}
const enhancers = []
const middleware = [
  thunk,
] // add middlewares

// This is boilerplate code from the redux devtools extension
if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
)

const store = createStore(
  rootReducer,
  initialState,
  composedEnhancers
)

export default store
