import React from 'react';
import Rate from './Rate';

const list = [
  { id: 1, class: 'name', text: '하동 녹차' },
  {
    id: 2,
    class: 'catchphrase',
    text: '차 한 잔으로 편안함과 차분함을 얻을 수 있어요!',
  },
  { id: 3, class: 'hashtag', text: '#차담화 오리지널 #JMT' },
  {
    id: 4,
    class: 'review',
    text: '하동 녹차',
    reviewRate: 5,
    isReview: true,
  },
  { id: 5, class: 'category', text: '차종: 약주' },
  { id: 6, class: 'isCaffeine', text: '카페인: 유' },
  { id: 7, class: 'volume', text: '용량: 500ml' },
  { id: 8, class: 'delivery', text: '배송기간: 2일 이내 배송' },
  { id: 9, class: 'priceCategory', text: '판매가격:' },
  { id: 10, class: 'price', text: '24,000원' },
  { id: 11, class: 'expirationDate', text: '유통기한: 별도 표기' },
  { id: 12, class: 'howToKeep', text: '보관방법: 냉장 보관' },
];

const introList = list.map(ele => {
  return (
    <div key={ele.id} className={ele.class}>
      {ele.isReview ? (
        <li>
          <Rate score={ele.reviewRate} />
          <a href="#reviewInDetail">[123 리뷰]</a>
        </li>
      ) : (
        <li>
          <span>{ele.text}</span>
        </li>
      )}
    </div>
  );
});

export default introList;
