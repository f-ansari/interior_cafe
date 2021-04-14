import Client from './'

export const __GetAllPost = async () => {
  try {
    const res = await Client.get('/posts')
    console.log(res.data)
    return res
  } catch (error) {
    throw error
  }
}
