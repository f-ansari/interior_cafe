import {
  USER_ID,
  FIRST_NAME,
  LAST_NAME,
  USERNAME,
  GET_USER_POSTS
} from '../types'

const iState = {
  userId: 1,
  firstName: 'Faryal',
  lastName: 'Ansari',
  username: 'simplyfaryal',
  userPosts: []
}

const UserReducer = (state = iState, action) => {
  switch (action.type) {
    case USER_ID:
      return { ...state, userDetails: action.payload }
    case FIRST_NAME:
      return { ...state, userDetails: action.payload }
    case LAST_NAME:
      return { ...state, userDetails: action.payload }
    case USERNAME:
      return { ...state, userDetails: action.payload }
    case GET_USER_POSTS:
      return { ...state, userPosts: action.payload }
    default:
      return { ...state }
  }
}

export default UserReducer
