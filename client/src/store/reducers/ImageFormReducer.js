import {
  UPLOAD_IMAGES,
  USER_ID_IMAGE,
  POST_ID,
  CLEAR_IMAGE_FORM
} from '../types'

const iState = {
  user_id: '',
  post_id: '',
  image: ''
}

const ImagesReducer = (state = iState, action) => {
  switch (action.type) {
    case UPLOAD_IMAGES:
      return {
        ...state,
        [action.payload.name]: action.payload.value
      }
    case USER_ID_IMAGE:
      return { ...state, user_id: action.payload }
    case POST_ID:
      return { ...state, post_id: action.payload }
    case CLEAR_IMAGE_FORM:
      return { ...state, image: '' }
    default:
      return { ...state }
  }
}

export default ImagesReducer
