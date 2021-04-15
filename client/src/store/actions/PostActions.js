import { __GetAllPost, __GetOnePost } from '../../services/PostService'
import { GET_POST, GET_ONE_POST } from '../types'

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

export const GetOnePost = (post_id) => async (dispatch) => {
  try {
    const post = await __GetOnePost(post_id)
    dispatch({
      type: GET_ONE_POST,
      payload: post
    })
  } catch (error) {
    throw error
  }
}
