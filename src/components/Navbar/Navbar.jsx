import React, { useEffect } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './Navbar.css';

const CustomNavbar = () => {
  useEffect(() => {
    // Agregar el evento de clic suave a los enlaces
    const smoothScroll = (target) => {
      const targetElement = document.querySelector(target);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 70, // Ajusta el desplazamiento según tu necesidad
          behavior: 'smooth'
        });
      }
    };

    const navLinks = document.querySelectorAll('.nav-link-custom');

    navLinks.forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = link.getAttribute('href');
        smoothScroll(target);
      });
    });
  }, []);

  return (
    <Navbar className="navbar-custom" bg="dark" variant="dark">
      <Navbar.Brand className="navbar-brand-custom" href="#inicio">INICIO</Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Link className="nav-link-custom" href="#lenguajes">LENGUAJES</Nav.Link>
        <Nav.Link className="nav-link-custom" href="#proyectos">PROYECTOS</Nav.Link>
        <Nav.Link className="nav-link-custom" href="#redes">REDES</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default CustomNavbar;
