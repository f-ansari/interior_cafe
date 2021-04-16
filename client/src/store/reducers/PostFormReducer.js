import { SET_USER_ID_FORM, TITLE, DESCRIPTION, CREATE_POST } from '../types'

const iState = {
  user_id: '',
  title: '',
  description: '',
  like: 0
}

const PostFormReducer = (state = iState, action) => {
  switch (action.type) {
    case SET_USER_ID_FORM:
      return { ...state, user_id: action.payload }
    case TITLE:
      return { ...state, title: action.payload }
    case DESCRIPTION:
      return { ...state, description: action.payload }
    case CREATE_POST:
      return { ...state, [action.payload.name]: action.payload.value }
    default:
      return { ...state }
  }
}

export default PostFormReducer
