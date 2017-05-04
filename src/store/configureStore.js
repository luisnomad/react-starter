import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import reducers from 'reducers'

const configureStore = initialState => {
  let middlewares = [thunk]

  if (process.env.NODE_ENV !== 'production') {
    middlewares = [...middlewares, logger]
  }

  const store = createStore(
    reducers,
    initialState,
    applyMiddleware(...middlewares)
  )

  return store
}

export default configureStore
