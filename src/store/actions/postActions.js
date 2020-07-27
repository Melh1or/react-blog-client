import * as actions from './index'
import axios from 'axios'

export const getPosts = () => async dispatch => {
  try {
    const res = await axios.get('/api/posts')
    dispatch({
      type: actions.GET_POSTS,
      payload: res.data
    })
  } catch(err) {
    dispatch({
      type: actions.ERROR,
      payload: err.response.data
    })
  }
}

export const getPost = (id) => async dispatch => {
  try {
    const res = await axios.get(`/api/posts/${id}`)
    dispatch({
      type: actions.GET_POST,
      payload: res.data
    })
  } catch(err) {
    console.log(err)
    dispatch({
      type: actions.ERROR,
      payload: err.response.data
    })
  }
}

export const deletePost = (id, history) => async dispatch => {
  try {
    await axios.delete(`/api/posts/${id}`)
    dispatch({
      type: actions.DELETE_POST,
    })
    history.push('/')
  } catch(err) {
    console.log(err)
    dispatch({
      type: actions.ERROR,
      payload: err
    })
  }
}

export const addPost = ( post, history ) => async dispatch => {
  try {
    await axios.post(`/api/posts`, post)
    dispatch({
      type: actions.ADD_POST,
    })
    history.push('/')
  } catch(err) {
    console.log(err)
    dispatch({
      type: actions.ERROR,
      payload: err
    })
  }
}

export const editPost = ( id, post, history ) => async dispatch => {
  try {
    await axios.put(`/api/posts/${id}`, post)
    dispatch({
      type: actions.ADD_POST,
    })
    history.push(`/posts/${id}`)
  } catch(err) {
    console.log(err)
    dispatch({
      type: actions.ERROR,
      payload: err
    })
  }
}

export const addComment = (id, text) => async dispatch => {
  try {
    const res = await axios.post(`/api/posts/comment/${id}`, { text })
    dispatch({
      type: actions.ADD_COMMENT,
      payload: res.data
    })
  } catch(err) {
    dispatch({
      type: actions.ERROR,
      payload: err
    })
  }
}

export const deleteComment = (id) => async dispatch => {
  try {
    const res = await axios.delete(`/api/posts/comment/${id}`)
    dispatch({
      type: actions.DELETE_COMMENT,
      payload: res.data
    })
  } catch(err) {
    dispatch({
      type: actions.ERROR,
      payload: err
    })
  }
}
