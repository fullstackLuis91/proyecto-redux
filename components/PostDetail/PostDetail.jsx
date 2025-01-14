import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getById } from '../../src/features/post/postSlice'


const PostDetail = () => {
    const {id} = useParams()
    
    const {post} = useSelector(state=> state.posts)

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getById(id))
    },[])
  return (
    <div>PostDetail
        <p>Title: {post.title}</p>
        <p>Content: {post.body}</p>
    </div>
  )
}

export default PostDetail