import {
  AUTHENTICATED,
  CREATE_A_USER,
  HANDLE_LOGIN,
  CURR_USERNAME,
  USER_F_NAME,
  USER_ID,
  USER_L_NAME
} from '../types'
import {
  __SetAddUser,
  __LoginUser,
  __CheckSession
} from '../../services/AuthService'

export const CreateANewUser = (formName, formValue) => ({
  type: CREATE_A_USER,
  payload: { name: formName, value: formValue }
})

export const SetAddUser = (formData) => async (dispatch) => {
  try {
    const addUser = await __SetAddUser(formData)
    return addUser
  } catch (error) {
    throw error
  }
}

export const HandleLogin = (formName, formValue) => ({
  type: HANDLE_LOGIN,
  payload: { name: formName, value: formValue }
})

export const LoginUser = (formData) => async (dispatch) => {
  try {
    const logUser = await __LoginUser(formData)
    dispatch({
      type: USER_ID,
      payload: logUser.payload.id
    })
    dispatch({
      type: USER_F_NAME,
      payload: logUser.payload.first_name
    })
    dispatch({
      type: USER_L_NAME,
      payload: logUser.payload.last_name
    })
    dispatch({
      type: CURR_USERNAME,
      payload: logUser.payload.username
    })
    dispatch({
      type: AUTHENTICATED,
      payload: true
    })
    // return logUser
  } catch (error) {
    throw error
  }
}

export const CheckSession = (token) => async (dispatch) => {
  try {
    const session = await __CheckSession(token)
    dispatch({
      type: USER_ID,
      payload: session.id
    })
    dispatch({
      type: USER_F_NAME,
      payload: session.first_name
    })
    dispatch({
      type: USER_L_NAME,
      payload: session.last_name
    })
    dispatch({
      type: CURR_USERNAME,
      payload: session.username
    })
    dispatch({
      type: AUTHENTICATED,
      payload: true
    })
    // return logUser
  } catch (error) {
    throw error
  }
}
