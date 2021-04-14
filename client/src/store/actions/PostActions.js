import { __GetAllPost } from '../../services/PostService'
import { GET_POST } from '../types'

export const GetAllPost = () => async (dispatch) => {
  try {
    const posts = await __GetAllPost()
    dispatch({
      type: GET_POST,
      payload: posts
    })
  } catch (error) {
    throw error
  }
}
