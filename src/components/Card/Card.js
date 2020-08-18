import React from 'react';
import './styles.scss';

function Card({ svcImage, header, description }) {
  return (
    <div className="card">
      <img src={svcImage} alt="service" />
      <div className="container">
        <h4>{header}</h4>
        <div className="text-container">
          <p>{description}</p>
        </div>
      </div>
    </div>
  )
}

export default Card;

