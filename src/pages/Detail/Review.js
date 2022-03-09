import React from 'react';
import Rate from './Rate';
import './Review.scss';

function Review({ username, boughtProduct, rating, createdAt, reviewComment }) {
  return (
    <div className="review">
      <div className="reviewHeader">
        <div className="email">
          <span>{username}</span>
        </div>
        <div className="boughtWhat">
          <span className="boughtProduct">{boughtProduct}</span>
          <span className="reviewRate">
            <Rate score={rating} />
          </span>
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
