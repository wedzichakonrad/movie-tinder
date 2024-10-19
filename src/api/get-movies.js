import axios from 'axios'
import { Config } from '../utils/config'

export const getMovies = async () => {
  try {
    const response = await axios.get(`${Config.baseURL}/recommendations`)
    return response?.data
  } catch (error) {
    console.error(error)
  }
}
