import React, { useState, useEffect } from 'react';
import './Section.scss';
import Wrap from './Wrap/Wrap';

function Section(props) {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    fetch('http://10.58.2.110:8000/drinks/farm-products', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => setProductList(data.result.farm));
  }, []);
  return (
    <section className="section">
      <div className="inner">
        <img src={props.img} alt="themaimg" />
        <span className="propose">{props.span}</span>
        <p className="recommend">{props.p}</p>
        <div className="more-btn">
          <a href="/">더보기 </a>
        </div>
        {productList.map((card, idx) => {
          return (
            <div className="product-box" key={idx}>
              {card.drinks.map((ele, idx) => {
                return (
                  <Wrap
                    key={ele.id}
                    className="wrap"
                    img={ele.image}
                    name={ele.name}
                    price={ele.price}
                    rate={ele.average_rating}
                    review={ele.review_count}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Section;
