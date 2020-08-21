import React from 'react';
import splunk from '../../assets/splunk.jpg';
import bodyShop from '../../assets/body_shop.jpg';
import restorations from '../../assets/restorations.jpg';
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
        <Card svcImage={splunk} header="Mecanica en General" />
        <Card svcImage={bodyShop} header="Hojalatería y Pintura" />
        <Card svcImage={restorations} header="Restauraciones" />
      </div>
    </div>
  )
}

export default React.memo(Services);