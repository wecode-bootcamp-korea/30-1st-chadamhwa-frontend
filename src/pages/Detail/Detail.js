import React from 'react';
import './Detail.scss';

function Detail() {
  return (
    <div className="Detail">
      <section className="rightSide">
        <h1>수량</h1>
        <input type="number" placeholder="1" />
        <p>총 상품 가격</p>
        <p>0원</p>
        <p>+(전국택배) 3,000원</p>
        <p>+(제주도 및 도서산간) 3,000원</p>
        <p>본 농장에서 50,000원 이상 구매 시 배송비 무료!</p>
        <button>장바구니 담기</button>
        <button>바로 구매하기</button>
      </section>
      <section className="product">
        <section className="productIntro">
          <img className="productImg" src="#" alt="Product image" />
          <section className="productIntroduction">
            <h1>하동 녹차</h1>
            <p>차 한 잔으로 편안함과 차분함을 얻을 수 있어요</p>
            <p>#진한 녹차 향 #은은한 단 맛 </p>
            <img src="#" alt="Product review stars" />
            <a href="#review">[123 리뷰]</a>
            <p>주종: 약주</p>
            <p>카페인: 유</p>
            <p>용량: 500ml</p>
            <p>배송기간: 2일 이내 배송</p>
            <p>판매가격:</p>
            <p>24,000원</p>
            <p>유통기한: 병입일로부터 90일</p>
            <p>보관방법: 냉장 보관</p>
          </section>
        </section>
        <div className="productDetails">
          <img src="#" alt="Product details" />
        </div>
      </section>
      <div name="review" className="review">
        <p>리뷰</p>
        <section>
          <span>최신순</span>
          <span>평점 높은 순</span>
          <span>평점 낮은 순</span>
        </section>
        <section>
          <p>Nickname</p>
        </section>
      </div>
    </div>
  );
}

export default Detail;
