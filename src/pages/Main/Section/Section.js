import React from 'react';
import './Section.scss';
import Wrap from './Wrap/Wrap';

function Section(props) {
  return (
    <section className="section">
      <div className="inner">
        <img src={props.img} alt="themaimg" />
        <span className="propose">{props.span}</span>
        <p className="recommend">{props.p}</p>
        <div className="more-btn">
          <a href="/">더보기 </a>
        </div>
        {props.list.map((card, idx) => {
          return (
            <div className="product-box" key={idx}>
              {card.map((ele, idx) => {
                return (
                  <Wrap
                    key={idx}
                    className="wrap"
                    img={ele.img}
                    name={ele.name}
                    price={ele.price}
                    rate={ele.rate}
                    review={ele.review}
                  />
                );
              })}
            </div>
          );
        })}
        <div className="slider">
          <a href="/">
            <i className="fa fa-chevron-left" aria-hidden="true" />
          </a>
          <a href="/">
            <i className="fa fa-chevron-right" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Section;
