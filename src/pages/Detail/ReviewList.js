import React from 'react';
import Review from './Review';

const REVIEW_LIST = [
  {
    id: 1,
    nickname: '사람1',
    boughtProduct: '[500ml] 하동 녹차',
    quantity: '1',
    reviewRate: '',
    boughtTime: '2022.03.05',
    reviewComment: '괜찮네요!',
  },
  {
    id: 2,
    nickname: '사람2',
    boughtProduct: '[500ml] 하동 녹차',
    quantity: '3',
    reviewRate: '',
    boughtTime: '2020.03.06',
    reviewComment:
      '제가 지금까지 마신 하동 녹차들 중 제일 맛있어요. 최고~ 배송도 빨라요!',
  },
];

function ReviewList() {
  return (
    <div className="review">
      {REVIEW_LIST.map(review => {
        return (
          <Review
            key={review.id}
            nickname={review.nickname}
            boughtProduct={review.boughtProduct}
            quantity={review.quantity}
            reviewRate={review.reviewRate}
            boughtTime={review.boughtTime}
            reviewComment={review.reviewComment}
          />
        );
      })}
    </div>
  );
}

export default ReviewList;
