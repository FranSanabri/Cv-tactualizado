import React, { useState } from 'react';
import './Languages.css';
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaServer, FaDatabase, FaJsSquare } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';

const Languages = () => {
  const [clickedIcon, setClickedIcon] = useState(null);

  const handleIconClick = (iconName) => {
    if (clickedIcon === iconName) {
      setClickedIcon(null);
    } else {
      setClickedIcon(iconName);
    }
  };

  return (
    <section id="lenguajes" className="text-center languages-section">
      <h2>Lenguajes</h2>
      <p className="description">Aquí están algunos de los lenguajes que utilizo:</p>
      <div className="icons-container">
        <div
          className={`icon-container ${clickedIcon === 'html' ? 'clicked' : ''}`}
          onClick={() => handleIconClick('html')}
        >
          <FaHtml5 className="icon" />
          <p className="icon-name">HTML</p>
        </div>
        <div
          className={`icon-container ${clickedIcon === 'css' ? 'clicked' : ''}`}
          onClick={() => handleIconClick('css')}
        >
          <FaCss3Alt className="icon" />
          <p className="icon-name">CSS</p>
        </div>
        <div
          className={`icon-container ${clickedIcon === 'js' ? 'clicked' : ''}`}
          onClick={() => handleIconClick('js')}
        >
          <FaJsSquare className="icon" />
          <p className="icon-name">JavaScript</p>
        </div>
        <div
          className={`icon-container ${clickedIcon === 'react' ? 'clicked' : ''}`}
          onClick={() => handleIconClick('react')}
        >
          <FaReact className="icon" />
          <p className="icon-name">React</p>
        </div>
        <div
          className={`icon-container ${clickedIcon === 'nodejs' ? 'clicked' : ''}`}
          onClick={() => handleIconClick('nodejs')}
        >
          <FaNodeJs className="icon" />
          <p className="icon-name">Node.js</p>
        </div>
        <div
          className={`icon-container ${clickedIcon === 'tailwind' ? 'clicked' : ''}`}
          onClick={() => handleIconClick('tailwind')}
        >
          <SiTailwindcss className="icon" />
          <p className="icon-name">Tailwind CSS</p>
        </div>
        <div
          className={`icon-container ${clickedIcon === 'server' ? 'clicked' : ''}`}
          onClick={() => handleIconClick('server')}
        >
          <FaServer className="icon" />
          <p className="icon-name">Express</p>
        </div>
        <div
          className={`icon-container ${clickedIcon === 'database' ? 'clicked' : ''}`}
          onClick={() => handleIconClick('database')}
        >
          <FaDatabase className="icon" />
          <p className="icon-name">Sequelize</p>
        </div>
      </div>
    </section>
  );
};

export default Languages;
