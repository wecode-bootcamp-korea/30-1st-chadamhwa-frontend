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
            src="/images/event0.png"
            alt="banner1"
          />
        </div>
        <div className="banner">
          <img
            className="evnet-banner"
            src="/images/event2.png"
            alt="banner1"
          />
        </div>
        <div className="banner">
          <img
            className="evnet-banner"
            src="/images/event4.png"
            alt="banner2"
          />
        </div>
        <div className="banner">
          <img
            className="evnet-banner"
            src="/images/event3.png"
            alt="banner3"
          />
        </div>
        <div className="banner">
          <img
            className="evnet-banner"
            src="/images/event1.png"
            alt="banner4"
          />
        </div>
      </section>

      {/* <Footer /> */}
    </>
  );
}

export default Event;
