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


 
  

  return (
    <div>
      Posts
      <Post /> {/* Pinta las publicaciones */}
    </div>
  );
};

export default Posts;