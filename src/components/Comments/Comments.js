import React from 'react';
import Comment from "./CommentItem";

const Comments = ({ comments }) => (
  <div>
    { comments.length === 0 && <p>There are no comments</p>}
    { comments.map(comment => <Comment key={comment._id} comment={comment}/>) }
  </div>
);

export default Comments;