import {
  EMAIL,
  PASSWORD,
  USERNAME,
  LAST_NAME,
  FIRST_NAME,
  HANDLE_LOGIN,
  CREATE_A_USER
} from '../types'

const iState = {
  first_name: '',
  last_name: '',
  username: '',
  email: '',
  password_digest: ''
}

const AuthReducer = (state = iState, action) => {
  switch (action.type) {
    case FIRST_NAME:
      return { ...state, first_name: action.payload }
    case LAST_NAME:
      return { ...state, last_name: action.payload }
    case USERNAME:
      return { ...state, username: action.payload }
    case EMAIL:
      return { ...state, email: action.payload }
    case PASSWORD:
      return { ...state, password_digest: action.payload }
    case CREATE_A_USER:
      return { ...state, [action.payload.name]: action.payload.value }
    case HANDLE_LOGIN:
      return { ...state, [action.payload.name]: action.payload.value }
    default:
      return { ...state }
  }
}

export default AuthReducer
