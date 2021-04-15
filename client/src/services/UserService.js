import Client from './'

export const __GetOneUser = async (user_id) => {
  try {
    const res = await Client.get(`/user/posts/${user_id}`)
    return res.data
  } catch (error) {
    throw error
  }
}
