import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from 'react-router'
import { Link } from "react-router-dom";
import Moment from "react-moment";

import { deletePost, getPost } from "../../store/actions/postActions";
import Spinner from "../Spinner/Spinner";
import AddComment from "../AddComent/AddComment";
import Comments from "../Comments/Comments";

const PostPage = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const { id } = useParams()

  const post = useSelector(state => state.post.post)
  const user = useSelector(state => state.auth.user)

  useEffect(() => {
    dispatch(getPost(id, history))
  }, [])

  const deleteHandler = () => {
    dispatch(deletePost(id, history))
  }

  const buttons = (
    <div className="mb-4">
      <button
        className="btn btn-danger mr-2"
        onClick={deleteHandler}
      >
        Delete
      </button>
      <Link
        className="btn btn-light"
        to={`/edit/${id}`}
      >
        Edit
      </Link>
    </div>
  )

  if(!post) return <Spinner />

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center">
        <h1>{post.title}</h1>
        <Moment className="text-muted" format="LTS">{post.date}</Moment>
      </div>
      <p className="text-muted">{post.author.name}</p>
      <p>{post.text}</p>
      { user && user.id === post.author._id && buttons }
      <hr />
      <AddComment />
      <Comments comments={post.comments} />
    </div>
  );
}

export default PostPage