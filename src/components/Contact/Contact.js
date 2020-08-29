import React from 'react';
import whats from '../../assets/whatsapp.svg';
import text from '../../copys.json';
import './styles.scss';

export function Contact() {
  return (
    <div className="contact-container">
      <h2>Contactanos</h2>
      <div className="row">
        <div className="ubication">
          <iframe
            title="classic-garage"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.105528662635!2d-99.30932858540692!3d19.407845886898336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d207dd1b258523%3A0xd8da9fa2997d02e4!2sClassic%20Cars%20Hxq!5e0!3m2!1ses-419!2smx!4v1598051370682!5m2!1ses-419!2smx"
            width="500"
            height="200"
            frameborder="0"
            style={{ border: 0 }}
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          />
        </div>
        <div className="contactInfo">
          <div>
            <a href={`https://wa.me/${text.contact.contactPhone}/?text=Me%20interesa%20el%20auto%20que%20estás%20vendiendo`}>
              <img src={whats} alt="whats-logo" width="100" height="auto" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(Contact);