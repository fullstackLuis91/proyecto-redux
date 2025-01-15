import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAll } from "../../src/features/post/postSlice";
import Post from "../Post/Post";
import { notification } from "antd";


const Posts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAll());
  }, []);


 /* const newPost = () => {
    const initialValue = {
      title: "",
      body: "",
      userId: "",
      reviews: "",
      tokens: "",
      likes: ""
    }
    const [postData, setPostData] = useState(initialValue);
    const { title, body, userId, reviews, tokens, likes  } = postData;
   
    const dispatch = useDispatch();
  
    const { isSuccess, message, isError } = useSelector((state) => state.auth);
  
    useEffect(() => {
      if (isSuccess) {
        notification.success({
          message: "Success",
          description: message,
        });
      }
      if(isError){
        notification.error({
          message: "Error",
          description: message,
        });
      }
      dispatch(reset())
    }, [isSuccess,isError]);
  
    const onChange = (e) => {
      setPostData({
        ...postData,
        [e.target.name]: e.target.value,
      });
    };
    const onSubmit = (e) => {
      e.preventDefault();
      
      /*if (password !== password2) {
        return notification.error({
          message: "Error",
          description: "Passwords do not match",
        });
      } else {
         dispatch(register(formData));
         return setFormData(initialValue)
      }
    };
    return (
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="name"
          value={name}
          onChange={onChange}
          placeholder="Name"
        />
        <input
          type="email"
          name="email"
          value={email}
          onChange={onChange}
          placeholder="Email"
        />
        <input
          type="date"
          name="birthday"
          value={birthday}
          onChange={onChange}
          placeholder="Birthday"
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={onChange}
          placeholder="Password"
        />
        <input
          type="password"
          name="password2"
          value={password2}
          onChange={onChange}
          placeholder="Password 2"
        />
        <button type="submit">Post</button>
      </form>
    );
  };*/
  

  return (
    <div>
      Posts
      <Post /> {/* Pinta las publicaciones */}
    </div>
  );
};

export default Posts;