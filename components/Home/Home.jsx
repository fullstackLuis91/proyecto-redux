import React from 'react';
import Posts from '../Posts/Posts';
import './Home.scss'; // Importa el archivo de estilos Sass

const Home = () => {
  return (
    <div className="home">
      <h1 className="home__title"></h1>
      <Posts />
    </div>
  );
};



export default Home;
