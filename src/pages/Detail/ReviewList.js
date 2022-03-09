import React from 'react';
import Review from './Review';

function ReviewList({ reviewData }) {
  const boughtProduct = '하동 녹차';

  return (
    <div className="review">
      {reviewData.map(({ user, rating, created_at, comment }, idx) => {
        return (
          <Review
            key={idx}
            username={user}
            boughtProduct={boughtProduct}
            rating={rating}
            createdAt={created_at}
            reviewComment={comment}
          />
        );
      })}
    </div>
  );
}

export default ReviewList;
