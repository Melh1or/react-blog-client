import React, {useEffect} from "react"
import { connect } from "react-redux";

import { getPosts } from "../../store/actions/postActions";
import Spinner from "../Spinner/Spinner";
import Post from "../Post/Post";

const Posts = ({ posts, getPosts }) => {
  useEffect(() => {
    getPosts()
  }, [])

  if(!posts) return <Spinner />

  return (
    <div>
      {posts.map(post =><Post key={post._id} post={post} />)}
    </div>
  )
}

const mapStateToProps = state => ({
  posts: state.post.posts
})

const mapDispatchToProps = {
  getPosts
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts)