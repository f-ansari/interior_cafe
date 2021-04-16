import Client from './'

export const __AddCompletePost = async (formData) => {
  try {
    const res = await Client.post(`/images`, formData)
    console.log(res.data)
    return res.data
  } catch (error) {
    throw error
  }
}
