import * as actions from '../actions'

const initialState = null

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actions.ERROR:
      return payload
    case actions.CLEAR_ERRORS:
      return null
    default:
      return state
  }
}