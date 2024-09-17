import React from 'react';

import '../../styles/Footer/Footer.scss';

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer__container">
          <p>
          All rights reserved by Muhammad Salman © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
