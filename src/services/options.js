import axios from 'axios'

const baseUrl = "http://localhost:3001/options"

const get = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const services = {
  get
}

export default services