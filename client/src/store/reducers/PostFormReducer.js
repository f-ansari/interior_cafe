import { USER_ID, TITLE, DESCRIPTION, LIKE } from '../types'

const iState = {
  userId: '',
  title: '',
  description: '',
  like: ''
}

const PostFormReducer = (state = iState, action) => {
  switch (action.type) {
    case USER_ID:
      return { ...state, userId: action.payload }
    case TITLE:
      return { ...state, title: action.payload }
    case DESCRIPTION:
      return { ...state, description: action.payload }
    case LIKE:
      return { ...state, like: action.payload }
    default:
      return { ...state }
  }
}

export default PostFormReducer
