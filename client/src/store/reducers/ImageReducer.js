import { GET_IMAGE } from '../types'

const iState = {
  mapImages: []
}

const ImageReducer = (state = iState, action) => {
  switch (action.type) {
    case GET_IMAGE:
      return { ...state, mapImages: action.payload }
    default:
      return { ...state }
  }
}

export default ImageReducer
