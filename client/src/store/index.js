import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import AuthReducer from './reducers/AuthReducer'
import UserReducer from './reducers/UserReducer'
import PostReducer from './reducers/PostReducer'
import PostFormReducer from './reducers/PostFormReducer'
import ImageReducer from './reducers/ImageReducer'
import { composeWithDevTools } from 'redux-devtools-extension'

const store = createStore(
  combineReducers({
    authState: AuthReducer,
    userState: UserReducer,
    imageState: ImageReducer,
    postState: PostReducer,
    postFormState: PostFormReducer
  }),
  composeWithDevTools(applyMiddleware(thunk))
)

export default store
