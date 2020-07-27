import React, {createRef, useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from "react-router";

import { editPost, getPost } from '../../store/actions/postActions'
import Spinner from "../Layout/Spinner";

const EditPost = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const { id } = useParams()

  const post = useSelector(state => state.post.post)

  const titleRef = createRef();
  const textRef = createRef();

  const onSubmit = e => {
    e.preventDefault()

    dispatch(editPost(
      id,
      {
        title: titleRef.current.value,
        text: textRef.current.value
      },
      history
    ))
  }

  useEffect(() => {
    dispatch(getPost(id))
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

export default EditPost