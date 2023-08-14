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
      <a
        href="https://www.canva.com/design/DAFpkd6w18Y/tb_YKT2yXkO_yksGuXkqWg/view?utm_content=DAFpkd6w18Y&utm_campaign=share_your_design&utm_medium=link&utm_source=shareyourdesignpanel"
        target="_blank"
        download="Francisco_Sanabria_CV.pdf"
        className="download-button"
      >
        Ver Curriculum Vitae
      </a>
    </section>
  );
};

export default Home;
