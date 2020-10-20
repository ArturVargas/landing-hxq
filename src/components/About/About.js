import React from 'react';
import vochito from '../../assets/CarLogo.png';
import text from '../../copys.json';
import './styles.scss';

export function About() {
  return (
    <div className="about-content">
      <div className="car-logo">
        <img src={vochito} alt="logo_vochito" />
      </div>
      <h1>{text.about.title}</h1>
      <h2>
          {text.about.description}
      </h2>
    </div>
  )
}

export default React.memo(About);
