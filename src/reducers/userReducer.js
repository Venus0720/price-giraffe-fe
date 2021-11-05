import userService from 'services/user'

const userReducer = (state = null, action) => {
  switch (action.type) {
    case 'GET_USER':
      return state.user
    case 'LOGIN_USER':
      return action.user
    default:
      return state
  }
}

export const getCurrentUser = () => {
  return async (dispatch) => {
    const { data } = await userService.getUser()
    dispatch({
      type: 'GET_USER',
      user: data.user_info || null
    })
  }
}

export const loginUser = (credentials) => {
  return async (dispatch) => {
    const { data } = await userService.loginUser(credentials)
    localStorage.setItem('token', data.access_token)
    dispatch({
      type: 'LOGIN_USER',
      user: data.user_info || null
    })
  }
}

export const logoutUser = () => {
  localStorage.removetItem('token')
  return {
    type: 'LOGOUT_USER',
    user: null
  }
}

export default userReducer
