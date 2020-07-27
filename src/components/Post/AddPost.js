import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { useHistory } from "react-router";

import { addPost } from '../../store/actions/postActions'

const AddPost = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  const onSubmit = e => {
    e.preventDefault()

    dispatch(addPost({ title, text }, history))
  }

  return (
    <form onSubmit={onSubmit}>

      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          className="form-control"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="text">Text</label>
        <input
          id="text"
          type="text"
          className="form-control"
          value={text}
          onChange={e => setText(e.target.value)}
        />
      </div>

      <button type="submit" className="btn btn-primary float-right">Submit</button>

    </form>
  )
}

export default AddPost