import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import AuthReducer from './reducers/AuthReducer'
import UserReducer from './reducers/UserReducer'
import PostFormReducer from './reducers/PostFormReducer'
import { composeWithDevTools } from 'redux-devtools-extension'

const store = createStore(
  combineReducers({
    authState: AuthReducer,
    userState: UserReducer,
    postState: PostFormReducer
  }),
  composeWithDevTools(applyMiddleware(thunk))
)

export default store
