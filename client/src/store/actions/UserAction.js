import { __GetOneUserPosts } from '../../services/PostService'
import { __GetOneUser } from '../../services/UserService'
import { GET_USER_POSTS, OTHER_USER, USER_ID } from '../types'

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

export const GetOneUser = (user_id) => async (dispatch) => {
  try {
    const oneUser = await __GetOneUser(user_id)
    dispatch({
      type: OTHER_USER,
      payload: oneUser
    })
  } catch (error) {
    throw error
  }
}
