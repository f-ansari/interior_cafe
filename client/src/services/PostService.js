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

export const __CreatePost = async (formData) => {
  try {
    const res = await Client.post(`/posts`, formData)
    console.log(res)
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
export const __DeletePost = async (post_id) => {
  try {
    const res = await Client.delete(`/user/post/${post_id}`)
    console.log(res)
    return res
  } catch (error) {
    throw error
  }
}

export const __UpdateLikes = async (post_id, likes) => {
  try {
    let input = {
      like: likes
    }
    const res = await Client.put(`/user/post/${post_id}`, input)
    return res.data
  } catch (error) {
    throw error
  }
}
