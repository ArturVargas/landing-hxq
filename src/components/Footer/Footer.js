import React from 'react';
import './styles.scss';

export function Footer() {
  return (
    <div className="footer-container">
      <div className="legend">
        <span>
          <img src="" alt="mini-logo"/>
        </span>
        <p>
          Classic Cars Huixquilucan &#174;
        </p>
      </div>
    </div>
  )
}

export default React.memo(Footer);