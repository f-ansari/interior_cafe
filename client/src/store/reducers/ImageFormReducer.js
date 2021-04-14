import { UPLOAD_IMAGES, USER_ID, POST_ID } from '../types'

const iState = {
    userID = '',
    postID = '',
    images = ''
}

const ImagesReducer = (state = iState, action) => {
    switch(action.type) {
        case UPLOAD_IMAGES:
            return {
                ...state, [action.payload.name]: action.payload.value 
            }
        case USER_ID:
            return { ...state, userID: action.payload}
        case POST_ID:
            return { ...state, postID: action.payload}
        default:
            return { ...state }
    }
}