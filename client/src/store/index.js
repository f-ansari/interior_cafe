import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import AuthReducer from './reducers/AuthReducer'
import UserReducer from './reducers/UserReducer'
import PostReducer from './reducers/PostReducer'
import PostFormReducer from './reducers/PostFormReducer'
import ImageFormReducer from './reducers/ImageFormReducer'

const store = createStore(
  combineReducers({
    authState: AuthReducer,
    userState: UserReducer,
    postState: PostReducer,
    postFormState: PostFormReducer,
    postImageFormState: ImageFormReducer
  }),
  composeWithDevTools(applyMiddleware(thunk))
)

export default store
