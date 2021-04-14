import Client from '.'

export const __GetAllImages = async () => {
  try {
    const res = await Client.get('/images')
    return res
  } catch (error) {
    throw error
  }
}
