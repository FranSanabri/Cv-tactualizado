import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <section id="inicio" className="text-center home-section">
      <div className="name-container">
        <h1 className="name-animation">Francisco Jesus Sanabria</h1>
      </div>
      <div className="image-container">
        <img
          src="https://i.ibb.co/48tRQJt/Whats-App-Image-2023-08-14-at-02-48-55.jpg"
          alt="Mi perfil"
          className="profile-image"
        />
      </div>
      <p className="role">Desarrollador Web.</p>
      <p className="portfolio-description">
        Bienvenido a mi portafolio, donde puedes explorar algunos de mis proyectos y habilidades en desarrollo web.
      </p>
      <button className="download-button">Descargar CV</button>
    </section>
  );
};

export default Home;
