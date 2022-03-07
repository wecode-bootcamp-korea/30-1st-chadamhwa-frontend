import React from 'react';
import Review from './Review';

function ReviewList({ reviewData }) {
  return (
    <div className="review">
      {reviewData.map(review => {
        return (
          <Review
            key={review.id}
            email={review.email}
            boughtProduct={review.boughtProduct}
            quantity={review.quantity}
            reviewRate={review.reviewRate}
            createdAt={review.createdAt}
            reviewComment={review.reviewComment}
          />
        );
      })}
    </div>
  );
}

export default ReviewList;
