import { USER_DETAILS } from '../types'

const iState = {
  userDetails: [] // incoming user with their post and comments
}

const UserReducer = (state = iState, action) => {
  switch (action.type) {
    case USER_DETAILS:
      return { ...state, userDetails: action.payload }
    default:
      return { ...state }
  }
}

export default UserReducer
