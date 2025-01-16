import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost, getAll } from "../../src/features/post/postSlice";
import Post from "../Post/Post";



const Posts = () => {
  const dispatch = useDispatch()
  const initialValue = {
    title: "",
    body: "",
  }

  useEffect(() => {
    dispatch(getAll());
  }, []);

  
   
    const [postData, setPostData] = useState(initialValue);
    const { title, body  } = postData;
   
    const onChange = (e) => {
      setPostData({
        ...postData,
        [e.target.name]: e.target.value,
      });
    };
    const onSubmit = async (e) => {
      e.preventDefault();
      await dispatch(addPost(postData));
      dispatch(getAll());
    };
    return (
      <div>
        Posts
      
      New post
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="title"
          value={title}
          onChange={onChange}
          placeholder="Title"
        />
        <input
          type="text"
          name="body"
          value={body}
          onChange={onChange}
          placeholder="Body"
        />
        <button type="submit">Post</button>
      </form>
        <Post /> {/* Pinta las publicaciones */}
      </div>
    )};
  
export default Posts;
