import React, { useEffect}  from "react"
import { useDispatch, useSelector } from "react-redux";

import { getPosts } from "../../store/actions/postActions";
import Spinner from "../Layout/Spinner";
import Post from "./Post";

const Posts = () => {
  const dispatch = useDispatch()
  const posts = useSelector(state => state.post.posts)

  useEffect(() => {
    dispatch(getPosts())
  }, [])

  if(!posts) return <Spinner />

  return (
    <div>
      {posts.map(post =><Post key={post._id} post={post} />)}
    </div>
  )
}

export default Posts