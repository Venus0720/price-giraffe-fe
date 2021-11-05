import userService from 'services/user'

const userReducer = (state = null, action) => {
  switch (action.type) {
    case 'GET_USER':
      return state.user
    case 'LOGIN_USER':
      return state.user
    default:
      return state
  }
}

export const getCurrentUser = () => {
  return async (dispatch) => {
    const user = await userService.getUser()
    dispatch({
      type: 'GET_USER',
      user: user || null
    })
  }
}

export const loginUser = (credentials) => {
  return async (dispatch) => {
    const user = await userService.loginUser(credentials)
    //store token
    console.log(user.access_token)
    dispatch({
      type: 'LOGIN_USER',
      user: user.user_info || null
    })
  }
}

export default userReducer
