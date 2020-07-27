import * as actions from '../actions'

const initialState = {
  post: null,
  posts: null
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actions.GET_POSTS:
      return {
        ...state,
        posts: payload
      }
      case actions.GET_POST:
        return {
        ...state,
        post: payload
      }
    case actions.DELETE_POST:
      return {
        ...state,
        post: null
      }
    case actions.ADD_POST:
      return {
        ...state,
        posts: null
      }
    case actions.EDIT_POST:
      return {
        ...state,
        post: null
      }
    case actions.DELETE_COMMENT:
    case actions.ADD_COMMENT:
      return {
        ...state,
        post: payload
      }
    default:
      return state
  }
}
