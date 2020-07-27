import React, {useState} from 'react';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import { addComment } from "../../store/actions/postActions";

const AddComment = ({ user, addComment }) => {
  const { id } = useParams()
  const [text, setText] = useState('');

  const onSubmit = e => {
    e.preventDefault()
    addComment(id, text)
    setText('')
  }

  if(!user) {
    return (
      <div>
        <p>You can't comment</p>
        <Link to="/login">Login</Link> or <Link to="/register">Register</Link>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="mb-4">
      <div className="form-group">
        <label htmlFor="text">Comment</label>
        <textarea className="form-control" value={text} onChange={e => setText(e.target.value)}/>
      </div>
      <button type="submit" className="btn btn-primary">Send</button>
    </form>
  )
}

const mapStateToProps = state => ({
  user: state.auth.user
})

const mapDispatchToProps = {
  addComment
}

export default connect(mapStateToProps, mapDispatchToProps)(AddComment)