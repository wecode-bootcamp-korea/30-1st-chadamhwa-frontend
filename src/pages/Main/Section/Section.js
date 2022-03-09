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

        <div className="slider">
          <a href="/">
            <i className="fa fa-chevron-left" aria-hidden="true" />
          </a>
          {props.list.map((ele, idx) => {
            return (
              <div className="product-box" key={idx}>
                <Wrap
                  className="wrap"
                  img={props.list.ele[idx].img}
                  name={props.list.ele[idx].name}
                  price={props.list.ele[idx].price}
                  rate={props.list.ele[idx].rate}
                  review={props.list.ele[idx].review}
                />
                {/* <Wrap
                  className="wrap"
                  img="/images/product2.JPG"
                  name="구름 버블티"
                  price="10,000원"
                  rate="4.9"
                  review="8"
                />

                <Wrap
                  className="wrap"
                  img="/images/product3.JPG"
                  name="수줍은 홍티"
                  price="6,000원"
                  rate="4.5"
                  review="3"
                />

                <Wrap
                  className="wrap"
                  img="/images/product4.JPG"
                  name="보라달빛 차"
                  price="9,000원"
                  rate="5.0"
                  review="13" */}
                {/* /> */}
              </div>
            );
            console.log(props.list);
          })}
          <a href="/">
            <i className="fa fa-chevron-right" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Section;
