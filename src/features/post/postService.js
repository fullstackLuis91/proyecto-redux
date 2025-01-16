import axios from "axios";

const API_URL = "http://localhost:8080/posts";

const getAll = async () => {
  const res = await axios.get(API_URL + "/getAll");
  return res.data;
};
const getById = async (id) => {
  const res = await axios.get(API_URL + "/id/" + id);
  return res.data;
};

const getByTitle = async (title) => {
  const res = await axios.get(API_URL + "/getByTitle/" + title);
  return res.data;
};
const addPost = async (postData) => {
  const token = localStorage.getItem("token") 
  const res = await axios.post(API_URL + "/create", postData, {
    headers: {
      authorization: token,
    }
  })
  return res.data
};

const addComment = async (comment) => {
  const token = localStorage.getItem("token") 
  const res = await axios.put(API_URL + "/addComment/" + comment.id, comment.commentData, {
    headers: {
      authorization: token,
    }
  })
  return res.data
};

  // comment.commentData
  // comment.id


const like = async (_id) => {
  const token = localStorage.getItem("token");
  const res = await axios.put(API_URL + "/like/"+_id,{}, {
      headers: {
        authorization: token,
      },
    } );
  return res.data;
};

const unLike = async (_id) => {
  const token = localStorage.getItem("token");
  const res = await axios.delete(API_URL + "/unLike/"+_id, {
    headers: {
      authorization: token,
    }
  })
  return res.data
}


const postService = {
  getAll,
  getById,
  getByTitle,
  like,
  unLike,
  addPost,
  addComment
};



export default postService;