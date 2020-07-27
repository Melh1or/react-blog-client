import React, {useEffect} from 'react';
import {connect} from "react-redux";
import { useParams } from 'react-router'

import {deletePost, getPost} from "../../store/actions/postActions";
import Spinner from "../Spinner/Spinner";
import {Link} from "react-router-dom";
import AddComment from "../AddComent/AddComment";
import Comments from "../Comments/Comments";

const PostPage = ({ post, getPost, user, deletePost, history }) => {
  const { id } = useParams()

  useEffect(() => {
    getPost(id, history)
  }, [])

  if(!post) return <Spinner />

  const deleteHandler = () => {
    deletePost(id, history)
  }

  const editHandler = () => {

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

  return (
    <div>
      <h1>{post.title}</h1>
      <p className="text-muted">{post.author.name}</p>
      <p>{post.text}</p>
      { user && user.id === post.author._id && buttons }

      <AddComment />
      <Comments comments={post.comments} />
    </div>
  );
}

const mapStateToProps = state => ({
  user: state.auth.user,
  post: state.post.post
})

const mapDispatchToProps = {
  getPost,
  deletePost
}

export default connect(mapStateToProps, mapDispatchToProps)(PostPage);