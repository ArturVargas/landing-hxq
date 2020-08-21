import React from 'react';
import './styles.scss';

export function Contact() {
  return (
    <div className="contact-container">
      <div className="row">
        <div className="ubication">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.105528662635!2d-99.30932858540692!3d19.407845886898336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d207dd1b258523%3A0xd8da9fa2997d02e4!2sClassic%20Cars%20Hxq!5e0!3m2!1ses-419!2smx!4v1598051370682!5m2!1ses-419!2smx"
            width="600" 
            height="450" 
            frameborder="0" 
            style={{border:0}} 
            allowfullscreen="" 
            aria-hidden="false" 
            tabindex="0"
          />
        </div>
      </div>
    </div>
  )
}

export default React.memo(Contact);