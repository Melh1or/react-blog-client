import React from 'react';
import {connect} from "react-redux";
import {deleteComment} from "../../store/actions/postActions";

const Comment = ({ comment, user, deleteComment }) => {
  const onDelete = () => {
    deleteComment(comment._id)
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

const mapStateToProps = state => ({
  user: state.auth.user
})

const mapDispatchToProps = {
  deleteComment
}

export default connect(mapStateToProps, mapDispatchToProps)(Comment)