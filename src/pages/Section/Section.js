import React from 'react';
import './Section.scss';

function Section(props) {
  return (
    <section className="section">
      <div className="inner">
        <img src={props.img} />
        {props.span}
        {props.p}
        <div className="more-btn">
          <a href="/">더보기 ></a>
        </div>

        <div className="slider">
          <a href="/">
            <i className="fa fa-chevron-left" aria-hidden="true" />
          </a>
          <div className="product-box">
            <div className="wrap">
              <img src="/images/product1.JPG" alt="tea1" />
              <span>허니비 티</span>
              <span>8,000원</span>
              <span>
                <i className="fa fa-star" aria-hidden="true" />
                <span className="bold">
                  <span className="bold"> 4.9</span>{' '}
                </span>{' '}
                | 리뷰 : 8
              </span>
            </div>

            <div className="wrap">
              <img src="/images/product2.JPG" alt="tea2" />
              <span>구름뭉게 원기옥 티</span>
              <span>9,000원</span>
              <span>
                <i className="fa fa-star" aria-hidden="true" />
                <span className="bold"> 5.0</span> | 리뷰 : 10
              </span>
            </div>

            <div className="wrap">
              <img src="/images/product3.JPG" alt="tea3" />
              <span>홍홍 티</span>
              <span>6,000원</span>
              <span>
                <i className="fa fa-star" aria-hidden="true" />
                <span className="bold"> 4.2</span> | 리뷰 : 1
              </span>
            </div>

            <div className="wrap">
              <img src="/images/product4.JPG" alt="tea4" />
              <span>라일라 소울비 티</span>
              <span>12,000원</span>
              <span>
                <i className="fa fa-star" aria-hidden="true" />
                <span className="bold"> 4.7</span> | 리뷰 : 3
              </span>
            </div>
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
