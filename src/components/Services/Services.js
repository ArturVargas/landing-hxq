import React from 'react';
import taxi from '../../assets/taxi.jpg';
import Card from '../Card/Card';
import './styles.scss';

export function Services() {
  return (
    <div className="service-content">
      <div className="row">
        <div className="align-content">
          <h2>Nuestros Servicios</h2>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Nunc id cursus metus aliquam eleifend mi in. 
          Ipsum dolor sit amet consectetur adipiscing. Proin sagittis nisl rhoncus mattis rhoncus urna. 
          </p>
        </div>
      </div>
      <div className="row">
        <Card svcImage={taxi} header="Mecanica en General" description="Lorem ipsum dolor sit amet" />
        <Card svcImage={taxi} header="Mecanica en General" description="blank" />
        <Card svcImage={taxi} header="Mecanica en General" description="blank" />
      </div>
    </div>
  )
}

export default React.memo(Services);