import {
  LOGOUT,
  USER_ID,
  OTHER_USER,
  USER_F_NAME,
  USER_L_NAME,
  DESTROY_POST,
  AUTHENTICATED,
  CURR_USERNAME,
  ADD_USER_POST,
  GET_USER_POSTS,
  INCOMING_NEW_POST
} from '../types'

const iState = {
  userId: '',
  firstName: '',
  lastName: '',
  username: '',
  authenticated: false,
  userPosts: [],
  otherUserInfo: {},
  incomingNewPost: {}
}

const UserReducer = (state = iState, action) => {
  switch (action.type) {
    case USER_ID:
      return { ...state, userId: action.payload }
    case USER_F_NAME:
      return { ...state, firstName: action.payload }
    case USER_L_NAME:
      return { ...state, lastName: action.payload }
    case CURR_USERNAME:
      return { ...state, username: action.payload }
    case GET_USER_POSTS:
      return { ...state, userPosts: action.payload }
    case AUTHENTICATED:
      return { ...state, authenticated: action.payload }
    case OTHER_USER:
      return { ...state, otherUserInfo: action.payload }
    case ADD_USER_POST:
      return {
        ...state,
        userPosts: [...state.userPosts, action.payload]
      }
    case INCOMING_NEW_POST:
      return { ...state, incomingNewPost: action.payload }
    case LOGOUT:
      return {
        authenticated: action.payload,
        firstName: '',
        lastName: '',
        username: '',
        userPosts: [],
        otherUserInfo: {},
        incomingNewPost: {}
      }
    case DESTROY_POST:
      const userPosts = state.userPosts.filter(
        (destroyPost, i) => destroyPost.id !== action.payload.data.payload
      )
      return { ...state, userPosts }
    default:
      return { ...state }
  }
}

export default UserReducer
