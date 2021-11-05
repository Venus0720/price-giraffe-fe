import axios from 'axios'

const getUser = async () => {
  const response = await axios.get('/api/v1/current_user')
  return response.data
}

const loginUser = async (credentials) => {
  const response = await axios.post('/api/v1/login', credentials)
  console.log(response)
  return response.data
}

const signUpUser = async (credentials) => {
  const response = await axios.post('/api/v1/users', credentials)
  return response.data
}

const userService = { getUser, loginUser, signUpUser }

export default userService
