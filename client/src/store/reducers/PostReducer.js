import { GET_POST, GET_ONE_POST } from '../types'

const iState = {
  mapPosts: [],
  onePost: {}
}

const PostReducer = (state = iState, action) => {
  switch (action.type) {
    case GET_POST:
      return { ...state, mapPosts: action.payload }
    case GET_ONE_POST:
      return { ...state, onePost: action.payload }
    default:
      return { ...state }
  }
}

export default PostReducer
