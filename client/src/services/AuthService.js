import Client from './'

export const __SetAddUser = async (formData) => {
  try {
    const res = await Client.post(`/auth/register`, formData)
    console.log(res.data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const __LoginUser = async (formData) => {
  try {
    const res = await Client.post(`/auth/login`, formData)
    console.log(res)
    return res.data
  } catch (error) {
    throw error
  }
}

export const __CheckSession = async (token) => {
  try {
    const res = await Client.get(`/auth/login`, token)
    console.log(res)
    return res.data
  } catch (error) {
    throw error
  }
}
