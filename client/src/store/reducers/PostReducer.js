import { GET_POST, GET_ONE_POST, UPDATE_LIKE } from '../types'

const iState = {
  mapPosts: [],
  onePost: {},
  likes: 0
}

const PostReducer = (state = iState, action) => {
  switch (action.type) {
    case GET_POST:
      console.log(action.payload)
      return { ...state, mapPosts: action.payload }
    case GET_ONE_POST:
      return { ...state, onePost: action.payload }
    case UPDATE_LIKE:
      const idT = state.mapPosts.data.filter(
        (post) => post.id === action.payload
      )
      idT[0].like += 1

      return { ...state }
    default:
      return { ...state }
  }
}

export default PostReducer
