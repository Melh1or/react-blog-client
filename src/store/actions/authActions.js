import * as actions from './index'
import axios from 'axios'
import jsCookie from 'js-cookie'

export const loginUser = data => async dispatch => {
  try {
    const res = await axios.post('/api/users/login', data)
    dispatch({
      type: actions.SET_USER,
      payload: res.data.user
    })
  } catch(err) {
    dispatch({
      type: actions.ERROR,
      payload: err.response.data
    })
  }
}

export const registerUser = data => async dispatch => {
  try {
    const res = await axios.post('/api/users/register', data)
    dispatch({
      type: actions.SET_USER,
      payload: res.data.user
    })
  } catch(err) {
    dispatch({
      type: actions.ERROR,
      payload: err.response.data
    })
  }
}

export const logoutUser = () => {
  jsCookie.remove('jwt')
  return {
    type: actions.LOGOUT_USER
  }
}

export const setCurrentUser = user => ({
  type: actions.SET_USER,
  payload: user
})
