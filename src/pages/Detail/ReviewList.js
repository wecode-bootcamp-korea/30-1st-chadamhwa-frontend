import React from 'react';
import Review from './Review';

function ReviewList({ reviewData }) {
  return (
    <div className="review">
      {reviewData.map(
        ({ user, rating, drink_name, created_at, comment }, idx) => {
          return (
            <Review
              key={idx}
              username={user}
              boughtProduct={drink_name}
              rating={rating}
              createdAt={created_at}
              reviewComment={comment}
            />
          );
        }
      )}
    </div>
  );
}

export default ReviewList;
