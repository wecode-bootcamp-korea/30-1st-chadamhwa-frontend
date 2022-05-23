import React from 'react';
import Rate from './Rate';

function Intro({ productData }) {
  const intPrice = Math.floor(productData.drink.price);
  return (
    <div className="productIntroduction">
      <ul>
        <li className="name">
          <span>{productData.drink.name}</span>
        </li>
        <li className="catchphrase">
          <span>{productData.drink.description}</span>
        </li>
        <li className="hashtag">
          <span>#차담화 오리지널 #JMT </span>
        </li>
        <li className="review">
          <Rate score={productData.rating_average.rating__avg} />
          <a href="#reviewInDetail">{`[${productData.comment_count} 리뷰]`}</a>
        </li>
        <li className="isCaffeine">
          <span>카페인 함량: {productData.drink.caffeine}mg</span>
        </li>
        <li className="volume">
          <span>용량: {productData.drink.weight}g</span>
        </li>
        <li className="delivery">
          <span>배송기간: 2일 이내 배송</span>
        </li>
        <li className="priceCategory">
          <span>판매가격:</span>
        </li>
        <li className="price">
          <span>{intPrice}원</span>
        </li>
        <li className="expirationDate">
          <span>유통기한: 별도 표기</span>
        </li>
        <li className="howToKeep">
          <span>보관방법: 냉장 보관</span>
        </li>
      </ul>
    </div>
  );
}

export default Intro;
