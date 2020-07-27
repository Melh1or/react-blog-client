import React, { useState } from 'react';
import { connect } from 'react-redux'

import { addPost } from '../../store/actions/postActions'
import withAuth from "../../hoc/withAuth";

const AddPost = ({ addPost, history }) => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  const onSubmit = e => {
    e.preventDefault()

    addPost({ title, text }, history)
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

const mapDispatchToProps = {
  addPost
}

export default withAuth(connect(null, mapDispatchToProps)(AddPost))