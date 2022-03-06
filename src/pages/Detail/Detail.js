import React, { useState } from 'react';
import './Detail.scss';

function Detail() {
  const [quantity, setQuantity] = useState(1);
  const price = 24000;

  const increaseQuantity = () => {
    setQuantity(quantity => quantity + 1);
  };
  const decreaseQuantity = () => {
    quantity > 1 ? setQuantity(quantity => quantity - 1) : setQuantity(1);
  };

  const totalPrice = price * quantity;

  const list = [
    { id: 1, class: 'name', text: '하동 녹차' },
    {
      id: 2,
      class: 'catchphrase',
      text: '차 한 잔으로 편안함과 차분함을 얻을 수 있어요!',
    },
    { id: 3, class: 'hashtag', text: '#진한 녹차 향 #은은한 단 맛' },
    { id: 4, class: 'review', text: '하동 녹차', isReview: true },
    { id: 5, class: 'category', text: '주종: 약주' },
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
            <img src="#" alt="Product rate" />
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

  return (
    <div className="detail">
      <div className="leftSide">
        <section className="productIntro">
          <div className="productMainImage">
            <img
              className="productImg"
              src="/images/nokcha.jpg"
              alt="Product"
            />
          </div>
          <div className="productIntroduction">
            <ul>{introList}</ul>
          </div>
        </section>
        <div className="productDetails">
          <img src="#" alt="Product details" />
        </div>
        <div name="review" className="review">
          <div id="reviewInDetail" className="review">
            <button className="reviewBtn">리뷰</button>
          </div>
          <section className="reviewSort">
            <button>최신순</button>
            <button>평점 높은 순</button>
            <button>평점 낮은 순</button>
          </section>
          <div className="reviewList">
            <div className="reviewHeader">
              <div className="nickname">
                <span>Nickname</span>
              </div>
              <div className="boughtWhat">
                <span className="boughtProduct">[500ml]하동 녹차</span>
                <img className="reviewRate" src="#" alt="Review rate" />
                <span className="boughtTime">2022.02.22</span>
              </div>
            </div>
            <div className="reviewComment">
              <span>리뷰 내용</span>
            </div>
          </div>
          <button className="moreReview">더 많은 리뷰</button>
        </div>
      </div>
      <div className="rightSideWrapper">
        <div className="rightSide">
          <ul>
            <li className="quantity">
              <span>수량</span>
            </li>
            <li>
              <div className="quantityCounter">
                <button
                  className={` ${
                    quantity > 1
                      ? 'ableDecreaseQuantity'
                      : 'unableDecreaseQuantity'
                  }`}
                  onClick={decreaseQuantity}
                >
                  −
                </button>
                <span>{quantity}</span>
                <button className="increaseQuantity" onClick={increaseQuantity}>
                  +
                </button>
              </div>
            </li>
            <li className="priceIs">
              <span>총 상품 가격</span>
            </li>
            <div className="totalPrice">
              <li>
                <span className="totalPrice">{totalPrice}원</span>
              </li>
            </div>
            <li className="deliveryFee">
              <span>+(전국택배) 3,000원</span>
            </li>
            <li className="additionalDeliveryFee">
              <span>+(제주도 및 도서산간) 3,000원</span>
            </li>
            <li className="freeDeliveryFee">
              <span>본 농장에서 50,000원 이상 구매 시 배송비 무료!</span>
            </li>
          </ul>
          <section className="rightSideBtn">
            <button>장바구니 담기</button>
            <button>바로 구매하기</button>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Detail;
