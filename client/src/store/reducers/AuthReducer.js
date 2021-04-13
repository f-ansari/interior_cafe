import { FIRST_NAME, LAST_NAME, USERNAME, USER_EMAIL, PASSWORD } from '../type'

const iState = {
  firstName: '',
  lastName: '',
  username: '',
  user_email: '',
  password: ''
}

const AuthReducer = (state = iState, action) => {
  switch (action.type) {
    case FIRST_NAME:
      return { ...state, firstName: action.payload }
    case LAST_NAME:
      return { ...state, lastName: action.payload }
    case USERNAME:
      return { ...state, username: action.payload }
    case USER_EMAIL:
      return { ...state, user_email: action.payload }
    case PASSWORD:
      return { ...state, password: action.payload }
    default:
      return { ...state }
  }
}

export default AuthReducer
