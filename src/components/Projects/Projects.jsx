import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
  const allProjects = [
    { name: 'Rick And Morty', image: 'https://i.pinimg.com/originals/5c/8f/90/5c8f90691ae41b3d7ebe8ced4ab1a9a6.jpg', status: 'finished', link: 'https://github.com/FranSanabri/rick-and-morty.git' },
    { name: 'Clima', image: 'https://i.ibb.co/Zm2tHy9/image2.png', status: 'finished', link: 'https://clima-5pdyc0lsl-fransanabri.vercel.app/' },
    { name: 'Ta-Te-Ti', image: 'http://images.produ.com/noticias/0720/big-Tateti.jpg', status: 'finished', link: 'https://proyecto-tateti.com' },
    { name: 'Celiaquia', image: 'https://i.ibb.co/z8sVR0M/Whats-App-Image-2023-08-14-at-09-55-20.jpg', status: 'fineshed', link: 'https://proyecto-celiaquia.com' },
    { name: 'Ecommerce-Bebidas', image: 'https://i.ibb.co/3vPf9QP/Captura-de-pantalla-2023-08-14-101403.png', status: 'fineshed', link: 'https://bebidas-b57bxvvsn-fransanabri.vercel.app/' },
    // ... Agrega más proyectos terminados aquí
  ];

  const inProgressProjects = [
    { name: 'Wiki-Minecraft', image: 'https://i.ibb.co/0ZSQYxt/Dise-o-sin-t-tulo.png', status: 'inProgress', link: 'https://proyecto-wikiminecraft.com' },
    // ... Agrega más proyectos en curso aquí
  ];

  const [activeStatus, setActiveStatus] = useState('all');

  const handleFilterChange = (status) => {
    setActiveStatus(status);
  };

  const filteredProjects = activeStatus === 'all'
    ? allProjects.concat(inProgressProjects)
    : activeStatus === 'finished'
    ? allProjects
    : inProgressProjects;

  return (
    <section id="proyectos" className="text-center">
      <h2>Proyectos</h2>
      <div className="filter-buttons">
        <button
          className={activeStatus === 'all' ? 'active' : ''}
          onClick={() => handleFilterChange('all')}
        >
          Todos
        </button>
        <button
          className={activeStatus === 'finished' ? 'active' : ''}
          onClick={() => handleFilterChange('finished')}
        >
          Terminados
        </button>
        <button
          className={activeStatus === 'inProgress' ? 'active' : ''}
          onClick={() => handleFilterChange('inProgress')}
        >
          En Curso
        </button>
      </div>
      <div className="projects-container">
        {filteredProjects.map((project, index) => (
          <a href={project.link} target="_blank" rel="noopener noreferrer" key={index}>
            <div className="project-box">
              <img src={project.image} alt={project.name} />
              <div className="project-name">{project.name}</div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
