import axios from 'axios'

const header = {
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`
  }
}

const getUser = async () => {
  const response = await axios.get('/api/v1/current_user', header)
  return response.data
}

const loginUser = async (credentials) => {
  const response = await axios.post(
    'https://pricegiraffe.co/api/v1/login',
    credentials
  )
  return response
}

const signUpUser = async (credentials) => {
  const response = await axios.post('/api/v1/users', credentials)
  return response.data
}

const userService = { getUser, loginUser, signUpUser }

export default userService
