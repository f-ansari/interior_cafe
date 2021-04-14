import { __GetOneUserPosts } from '../../services/PostService'
import { GET_USER_POSTS } from '../types'

export const GetOneUserPosts = (user_id) => async (dispatch) => {
  try {
    const post = await __GetOneUserPosts(user_id)
    dispatch({
      type: GET_USER_POSTS,
      payload: post
    })
  } catch (error) {
    throw error
  }
}
