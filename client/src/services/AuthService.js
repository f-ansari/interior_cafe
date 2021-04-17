import Client from './'

export const __SetAddUser = async (formData) => {
  try {
    const res = await Client.post(`/auth/register`, formData)
    return res.data
  } catch (error) {
    throw error
  }
}

export const __LoginUser = async (formData) => {
  try {
    const res = await Client.post(`/auth/login`, formData)
    localStorage.setItem('token', res.data.token)
    return res.data
  } catch (error) {
    throw error
  }
}

export const __CheckSession = async (token) => {
  try {
    const res = await Client.get(`/auth/login`)
    return res.data
  } catch (error) {
    throw error
  }
}
