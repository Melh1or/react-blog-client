import * as actions from '../actions'

export const error = error => ({
  type: actions.ERROR,
  payload: error
})

export const clearErrors = () => ({
  type: actions.CLEAR_ERRORS,
})