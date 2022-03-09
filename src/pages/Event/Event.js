import React from 'react';
import './Event.scss';
// import Nav from '../../components/Nav/Nav';
// import Subnv from '../../components/Subnav/Subnav';
// import Footer from '../../components/Footer/Footer';

function Event() {
  return (
    <>
      {/* <Nav /> */}
      {/* <Subnav /> */}

      <section className="section">
        <div className="banner">
          <img
            className="evnet-banner"
            src="/images/banner1.png"
            alt="banner1"
          />
        </div>
        <div className="banner">
          <img
            className="evnet-banner"
            src="/images/banner2.png"
            alt="banner2"
          />
        </div>
        <div className="banner">
          <img
            className="evnet-banner"
            src="/images/banner3.png"
            alt="banner3"
          />
        </div>
        <div className="banner">
          <img
            className="evnet-banner"
            src="/images/banner4.png"
            alt="banner4"
          />
        </div>
      </section>

      {/* <Footer /> */}
    </>
  );
}

export default Event;
