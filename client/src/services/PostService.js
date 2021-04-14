import Client from './'

export const __GetAllPost = async () => {
  try {
    const res = await Client.get('/posts')
    return res
  } catch (error) {
    throw error
  }
}
