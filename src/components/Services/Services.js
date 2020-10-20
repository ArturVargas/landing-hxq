import React from 'react';
import text from '../../copys.json';
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
          <h2>{text.services.title}</h2>
          <p>
            {text.services.description}
          </p>
        </div>
      </div>
      <div className="row">
        <Card
          svcImage={splunk}
          header={text.services.engineSystem.title}
          description={text.services.engineSystem.description}
        />
        <Card
          svcImage={bodyShop}
          header={text.services.bodyShop.title}
          description={text.services.bodyShop.description}
        />
        <Card
          svcImage={restorations}
          header={text.services.restorations.title}
          description={text.services.restorations.description}
        />
      </div>
    </div>
  )
}

export default React.memo(Services);