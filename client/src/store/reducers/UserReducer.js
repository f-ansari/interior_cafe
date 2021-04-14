import {
  USER_ID,
  USER_F_NAME,
  USER_L_NAME,
  CURR_USERNAME,
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
      return { ...state, userId: action.payload }
    case USER_F_NAME:
      return { ...state, firstName: action.payload }
    case USER_L_NAME:
      return { ...state, lastName: action.payload }
    case CURR_USERNAME:
      return { ...state, username: action.payload }
    case GET_USER_POSTS:
      return { ...state, userPosts: action.payload }
    default:
      return { ...state }
  }
}

export default UserReducer
