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
  unLike
};



export default postService;