import React from 'react';
import './Figure.scss';

function Figure() {
  return (
    <figure className="figure">
      <input className="btn" type="radio" name="slide" id="slide01" checked />
      <input className="btn" type="radio" name="slide" id="slide02" checked />
      <input className="btn" type="radio" name="slide" id="slide03" checked />
      <input className="btn" type="radio" name="slide" id="slide04" checked />
      <ul className="slide-list">
        <li className="slide-item">
          <a href="/">
            <label htmlFor="slide04" className="prev" />
            <img src="/images/banner4.png" alt="event banner" />
            <label htmlFor="slide02" className="next" />
          </a>
        </li>
        <li className="slide-item">
          <a href="/">
            <label htmlFor="slide01" className="prev" />
            <img src="/images/banner3.png" alt="event banner" />
            <label htmlFor="slide03" className="next" />
          </a>
        </li>
        <li className="slide-item">
          <a href="/">
            <label htmlFor="slide02" className="prev" />
            <img src="/images/banner2.png" alt="event banner" />
            <label htmlFor="slide04" className="next" />
          </a>
        </li>
        <li className="slide-item">
          <a href="/">
            <label htmlFor="slide03" className="prev" />
            <img src="/images/banner1.png" alt="event banner" />
            <label htmlFor="slide01" className="next" />
          </a>
        </li>
      </ul>
    </figure>
  );
}

export default Figure;
