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
  const res = await axios.get(API_URL + "/title/" + title);
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


const postService = {
  getAll,
  getById,
  getByTitle,
  addPost
};

export default postService;