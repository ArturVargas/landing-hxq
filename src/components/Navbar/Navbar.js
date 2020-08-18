import React, { useState, useEffect } from 'react'
import './styles.scss';

export function Navbar() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 100
      ?
        handleShow(true)
      :
        handleShow(false)
    });
    return () => {
      window.removeEventListener("scroll");
    }
  }, []);

  return (
    <nav className={`navbar ${show && "nav_color"}`}>
      <a href="#home" className="logo">logo</a>
      <ul className="main-nav" id="menu">
        <li><a href="#about">Nosotros</a></li>
        <li><a href="#services">Servicios</a></li>
        <li><a href="#contact">Contacto</a></li>
      </ul>
    </nav>
  )
}

export default React.memo(Navbar);
