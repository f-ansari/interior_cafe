import Client from './'

export const __AddCompletePost = async (formData) => {
  try {
    const res = await Client.post(`/images`, formData)
    return res.data
  } catch (error) {
    throw error
  }
}
