import React from 'react';
import './Review.scss';

function Review({
  nickname,
  boughtProduct,
  quantity,
  reviewRate,
  boughtTime,
  reviewComment,
}) {
  return (
    <div className="review">
      <div className="reviewHeader">
        <div className="nickname">
          <span>{nickname}</span>
        </div>
        <div className="boughtWhat">
          <span className="boughtProduct">
            {boughtProduct}
            <span className="quantity">{quantity}병</span>
          </span>
          <img className="reviewRate" src="#" alt="Review rate" />
          <span className="boughtTime">{boughtTime}</span>
        </div>
      </div>
      <div className="reviewComment">
        <span>{reviewComment}</span>
      </div>
    </div>
  );
}

export default Review;
