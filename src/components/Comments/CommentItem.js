import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { deleteComment } from "../../store/actions/postActions";

const Comment = ({ comment }) => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.auth.user)

  const onDelete = () => {
    dispatch(deleteComment(comment._id))
  }

  return (
    <div className="card mb-2">
      <div className="card-body">
        <h4>{comment.author.name}</h4>
        <p>{comment.text}</p>
        {
          user && user.id === comment.author._id &&
          <button className="btn btn-danger" onClick={onDelete}>Delete</button>
        }
      </div>
    </div>
  )
}

export default Comment