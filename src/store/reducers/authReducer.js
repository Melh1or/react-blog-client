import * as actions from '../actions'

const initialState = {
  user: null
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actions.SET_USER:
      return {
        ...state,
        user: payload
      }
    case actions.LOGOUT_USER:
      return {
        ...state,
        user: null
      }
    default:
      return state
  }
}