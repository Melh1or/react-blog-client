import React from 'react'
import {Link} from "react-router-dom";

const Post = ({ post }) => (
  <div className="card mb-2">
    <div className="card-body">
      <h1>{post.title}</h1>
      <p>{post.text}</p>
      <Link to={`/posts/${post._id}`} className="btn btn-primary">More...</Link>
    </div>
  </div>
)

export default Post