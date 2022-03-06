import React from 'react';
import './Wrap.scss';

function Wrap(props) {
  return (
    <div className="wrap">
      <div className="img-box">
        <img className="items" src={props.img} />
      </div>
      <div className="txt-box">
        <span className="product-name">{props.name}</span>
        <span className="product-price">{props.price}</span>
        <span className="product-detail">
          <i className="fa fa-star" aria-hidden="true" />
          <span className="bold">
            <span className="bold"> {props.rate} </span>{' '}
          </span>{' '}
          | 리뷰 : {props.review}
        </span>
      </div>
    </div>
  );
}

export default Wrap;
