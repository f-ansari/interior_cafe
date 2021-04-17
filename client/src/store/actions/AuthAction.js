import {
  AUTHENTICATED,
  CREATE_A_USER,
  HANDLE_LOGIN,
  USERNAME,
  USER_F_NAME,
  USER_ID,
  USER_L_NAME
} from '../types'
import { __SetAddUser, __LoginUser } from '../../services/AuthService'

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
      payload: logUser.id
    })
    dispatch({
      type: USER_F_NAME,
      payload: logUser.first_name
    })
    dispatch({
      type: USER_L_NAME,
      payload: logUser.last_name
    })
    dispatch({
      type: USERNAME,
      payload: logUser.username
    })
    dispatch({
      type: AUTHENTICATED,
      payload: true
    })
    console.log(logUser)
    return logUser
  } catch (error) {
    throw error
  }
}
