import React, {createRef, useEffect, useState} from 'react';
import { connect } from 'react-redux'
import {useParams} from "react-router";

import {editPost, getPost} from '../../store/actions/postActions'
import Spinner from "../Spinner/Spinner";

const EditPost = ({ editPost, getPost, post, history }) => {
  const { id } = useParams()
  const titleRef = createRef();
  const textRef = createRef();

  const onSubmit = e => {
    e.preventDefault()

    editPost(
      id,
      {
        title: titleRef.current.value,
        text: textRef.current.value
      },
      history
    )
  }

  useEffect(() => {
    getPost(id)
  }, [])

  if(!post) return <Spinner />

  return (
    <form onSubmit={onSubmit}>

      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          ref={titleRef}
          id="title"
          type="text"
          className="form-control"
          defaultValue={post.title}
        />
      </div>

      <div className="form-group">
        <label htmlFor="text">Text</label>
        <input
          ref={textRef}
          id="text"
          type="text"
          className="form-control"
          defaultValue={post.text}
        />
      </div>

      <button type="submit" className="btn btn-primary float-right">Edit</button>

    </form>
  )
}

const mapStateToProps = state => ({
  post: state.post.post
})

const mapDispatchToProps = {
  editPost,
  getPost
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPost);