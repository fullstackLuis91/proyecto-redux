import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { addComment, getById } from '../../src/features/post/postSlice'


const PostDetail = () => {
    const {id} = useParams()
    
    const {post} = useSelector(state=> state.posts)

    const dispatch = useDispatch()

    const initialValue = {
      comment: ""
    }

    const [commentData, setCommentData] = useState(initialValue);
        const { comment  } = commentData;

        const onChange = (e) => {
          setCommentData({
            ...commentData,
            [e.target.name]: e.target.value,
          });
        };

        const onSubmit = async (e) => {
              e.preventDefault();
              await dispatch(addComment({commentData, id}));
              dispatch(getById(id))
            };

    useEffect(()=>{
        dispatch(getById(id))
    },[])
  return (
    <div>PostDetail
        <p>Title: {post.title}</p>
        <p>Content: {post.body}</p>
    
     <form onSubmit={onSubmit}>
        <input
          type="text"
          name="comment"
          value={comment}
          onChange={onChange}
          placeholder="Your comment"
        />
       <button type="submit">New comment</button>
      </form>
      
      <h1>Comments</h1>
      
        {post.reviews?.map(review =>{
            return <p>Title: {review.comment}</p>
        })}
      </div>
)}

export default PostDetail