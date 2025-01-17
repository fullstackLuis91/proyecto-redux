import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost, getAll } from "../../src/features/post/postSlice";
import Post from "../Post/Post";
import './Posts.scss'; // Importa el archivo de estilos Sass

const Posts = () => {
  const dispatch = useDispatch();
  const initialValue = {
    title: "",
    body: "",
  };

  useEffect(() => {
    dispatch(getAll());
  }, []);

  const [postData, setPostData] = useState(initialValue);
  const { title, body } = postData;

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
    <div className="posts">
      <img 
        src="https://png.pngtree.com/png-clipart/20231002/original/pngtree-moto-cross-logo-designs-in-vector-illustration-on-a-white-background-png-image_12936080.png" 
        alt="Social Bike Logo" 
        className="posts__logo" 
      /> {/* Imagen en la parte superior izquierda */}

      <div className="posts__title-container">
        <h1 className="posts__main-title">Social Bike</h1> {/* Título arriba del formulario */}
      </div>

      <h1 className="posts__title">Posts</h1>

      <div className="posts__form-container">
        <h2 className="posts__form-title">New Post</h2>
        <form className="posts__form" onSubmit={onSubmit}>
          <input
            type="text"
            name="title"
            value={title}
            onChange={onChange}
            placeholder="Title"
            className="posts__input"
          />
          <input
            type="text"
            name="body"
            value={body}
            onChange={onChange}
            placeholder="Body"
            className="posts__input"
          />
          <button type="submit" className="posts__button">Post</button>
        </form>
      </div>

      <div className="posts__image-container">
        <img
          src="https://hondamaquina.com/imagenes/cbr1000rr-sp-09.jpg"
          alt="Honda CBR1000RR SP"
          className="posts__image"
        />
        <img
          src="https://www.moto1pro.com/sites/default/files/honda_cbr1000rr-r_sp_2020.jpg"
          alt="Honda CBR1000RR 2020"
          className="posts__image"
        />
      </div>
      <div className="posts__image-container">
  <img
    src="https://cdn.topgear.es/sites/navi.axelspringer.es/public/media/image/2019/12/pinguinos-concentracion-motos_1.jpg?tf=3840x"
    alt="Pingüinos Concentración Motos"
    className="posts__image"
  />
</div>

      <Post /> {/* Pinta las publicaciones */}
    </div>
  );
};

export default Posts;
