import React from 'react';
import './SocialIcons.css'; // Asegúrate de tener tus estilos definidos

import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const SocialIcons = () => {
  return (
    <section id="redes" className="text-center">
      <h2>Sígueme en las redes sociales</h2>
      <div className="social-icons-container">
        <div className="social-icon-box">
          <a href="https://www.instagram.com/fran.sanabria/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="social-icon" />
          </a>
        </div>
        <div className="social-icon-box">
          <a href="https://www.linkedin.com/in/francisco-jesus-sanabria-07b189236/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="social-icon" />
          </a>
        </div>
        <div className="social-icon-box">
          <a href="https://github.com/FranSanabri" target="_blank" rel="noopener noreferrer">
            <FaGithub className="social-icon" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default SocialIcons;
