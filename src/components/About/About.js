import React from 'react';
import vochito from '../../assets/CarLogo.png';
import './styles.scss';

export function About() {
  return (
    <div className="about-content">
      <div className="car-logo">
        <img src={vochito} alt="logo_vochito" />
      </div>
      <h1>Classic Cars Huixquilucan</h1>
      <h2>
        Alta mecanica especializada, 
        ofrecemos los mejores servicios con la más alta calidad.
        Con más de 20 años de expericencia en el area de restauración automotriz.
      </h2>
    </div>
  )
}

export default React.memo(About);
