import { GET_POST } from '../types'

const iState = {
  mapPosts: []
}

const PostReducer = (state = iState, action) => {
  switch (action.type) {
    case GET_POST:
      return { ...state, mapPosts: action.payload }
    default:
      return { ...state }
  }
}

export default PostReducer
