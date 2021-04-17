import {
  __GetAllPost,
  __GetOnePost,
  __DeletePost,
  __UpdateLikes,
  __CreatePost
} from '../../services/PostService'
import {
  GET_POST,
  GET_ONE_POST,
  DESTROY_POST,
  UPDATE_LIKE,
  CREATE_POST,
  SET_USER_ID_FORM,
  ADD_USER_POST,
  INCOMING_NEW_POST
} from '../types'

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

export const CreateNewPost = (formName, formValue) => ({
  type: CREATE_POST,
  payload: { name: formName, value: formValue }
})

export const AddPost = (formData) => async (dispatch) => {
  try {
    const post = await __CreatePost(formData)
    dispatch({
      type: ADD_USER_POST,
      payload: post
    })
    dispatch({
      type: INCOMING_NEW_POST,
      payload: post
    })
    // return post
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

export const DeletePost = (post_id) => async (dispatch) => {
  try {
    const destroy = await __DeletePost(post_id)
    console.log(destroy)
    dispatch({
      type: DESTROY_POST,
      payload: destroy
    })
  } catch (error) {
    throw error
  }
}

export const UpdateLikes = (post_id, likes) => async (dispatch) => {
  try {
    const like = await __UpdateLikes(post_id, likes)
    dispatch({
      type: UPDATE_LIKE,
      payload: post_id
    })
    return like
  } catch (error) {
    throw error
  }
}

export const SetId = (user_id) => async (dispatch) => {
  dispatch({
    type: SET_USER_ID_FORM,
    payload: user_id
  })
}
