import {
  FIRST_SUBMIT,
  POST_ID,
  UPLOAD_IMAGES,
  USER_ID_IMAGE,
  RESET_IMAGE
} from '../types'
import { __AddCompletePost } from '../../services/ImageService'

export const AppendImageToPost = (formName, formValue) => ({
  type: UPLOAD_IMAGES,
  payload: { name: formName, value: formValue }
})

export const SetUserId = (userId) => ({
  type: USER_ID_IMAGE,
  payload: userId
})

export const SetPostId = (postId) => ({
  type: POST_ID,
  payload: postId
})

export const AddCompletePost = (formData) => async (dispatch) => {
  try {
    const completePost = await __AddCompletePost(formData)
    return completePost
  } catch (error) {
    throw error
  }
}

export const FirstImageSubmit = () => (dispatch) => {
  dispatch({
    type: FIRST_SUBMIT,
    payload: true
  })
}

export const ResetImageForm = () => (dispatch) => {
  dispatch({
    type: RESET_IMAGE,
    payload: false
  })
}
