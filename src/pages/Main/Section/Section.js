import React from 'react';
import './Section.scss';
import Wrap from './Wrap/Wrap';

function Section(props) {
  return (
    <section className="section">
      <div className="inner">
        <img src={props.img} />
        <span className="propose">{props.span}</span>
        <p className="recommend">{props.p}</p>
        <div className="more-btn">
          <a href="/">더보기 ></a>
        </div>

        <div className="slider">
          <a href="/">
            <i className="fa fa-chevron-left" aria-hidden="true" />
          </a>
          <div className="product-box">
            <Wrap
              className="wrap"
              img="/images/product1.JPG"
              name="허니비 차"
              price="8,000원"
            />

            <Wrap
              className="wrap"
              img="/images/product2.JPG"
              name="구름 버블티"
              price="10,000원"
            />

            <Wrap
              className="wrap"
              img="/images/product3.JPG"
              name="수줍은 홍티"
              price="6,000원"
            />

            <Wrap
              className="wrap"
              img="/images/product4.JPG"
              name="보라달빛 차"
              price="9,000원"
            />
          </div>
          <a href="/">
            <i className="fa fa-chevron-right" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Section;
