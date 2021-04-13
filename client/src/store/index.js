import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import AuthReducer from './reducers/AuthReducer'
import { composeWithDevTools } from 'redux-devtools-extension'

const store = createStore(
  combineReducers({
    authState: AuthReducer
  }),
  composeWithDevTools(applyMiddleware(thunk))
)

export default store
