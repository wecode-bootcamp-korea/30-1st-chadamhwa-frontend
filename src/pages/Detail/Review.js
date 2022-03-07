import React from 'react';
import Rate from './Rate';
import './Review.scss';

function Review({
  email,
  boughtProduct,
  quantity,
  reviewRate,
  createdAt,
  reviewComment,
}) {
  return (
    <div className="review">
      <div className="reviewHeader">
        <div className="email">
          <span>{email}</span>
        </div>
        <div className="boughtWhat">
          <span className="boughtProduct">
            {boughtProduct}
            <span className="quantity"> X {quantity}병</span>
          </span>
          <Rate score={reviewRate} />
          <span className="createdAt">{createdAt}</span>
        </div>
      </div>
      <div className="reviewComment">
        <span>{reviewComment}</span>
      </div>
    </div>
  );
}

export default Review;
