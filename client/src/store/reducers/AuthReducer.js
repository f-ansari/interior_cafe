import { FIRST_NAME, LAST_NAME, USERNAME, EMAIL, PASSWORD } from '../types'

const iState = {
  firstName: '',
  lastName: '',
  username: '',
  email: '',
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
    case EMAIL:
      return { ...state, email: action.payload }
    case PASSWORD:
      return { ...state, password: action.payload }
    default:
      return { ...state }
  }
}

export default AuthReducer
