import Client from './'

export const __GetAllPost = async () => {
  try {
    const res = await Client.get('/posts')
    return res
  } catch (error) {
    throw error
  }
}

export const __GetOneUserPosts = async (user_id) => {
  try {
    const res = await Client.get(`/posts/${user_id}`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const __GetOnePost = async (post_id) => {
  try {
    const res = await Client.get(`/user/post/${post_id}`)
    return res.data
  } catch (error) {
    throw error
  }
}
