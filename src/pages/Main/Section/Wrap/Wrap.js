import React from 'react';
import './Wrap.scss';

function Wrap(props) {
  return (
    <div className="wrap">
      <img className="items" src={props.img} />
      <span className="product-name">{props.name}</span>
      <span className="product-price">{props.price}</span>
      <span className="product-detail">
        <i className="fa fa-star" aria-hidden="true" />
        <span className="bold">
          <span className="bold"> 4.9</span>{' '}
        </span>{' '}
        | 리뷰 : 8
      </span>
    </div>
  );
}

export default Wrap;
