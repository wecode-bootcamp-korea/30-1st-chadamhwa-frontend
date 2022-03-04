import React, { useState } from 'react';
import './Detail.scss';

function Detail() {
  const [quantity, setQuantity] = useState(1);
  const price = 24000;

  const increaseQuantity = () => {
    setQuantity(quantity => quantity + 1);
  };
  const decreaseQuantity = () => {
    setQuantity(quantity => quantity - 1);
  };

  const totalPrice = price * quantity;

  return (
    <div className="Detail">
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
            <ul>
              <li className="name">
                <span>하동 녹차</span>
              </li>
              <li className="catchphrase">
                <span>차 한 잔으로 편안함과 차분함을 얻을 수 있어요!</span>
              </li>
              <li className="hashtag">
                <span>#진한 녹차 향 #은은한 단 맛 </span>
              </li>
              <li className="review">
                <img src="#" alt="Product rate" />
                <a href="#reviewInDetail">[123 리뷰]</a>
              </li>
              <li className="category">
                <span>주종: 약주</span>
              </li>
              <li className="isCaffeine">
                <span>카페인: 카페인</span>
              </li>
              <li className="volume">
                <span>용량: 500ml</span>
              </li>
              <li className="delivery">
                <span>배송기간: 2일 이내 배송</span>
              </li>
              <li className="priceCategory">
                <span>판매가격:</span>
              </li>
              <li className="price">
                <span>24,000원</span>
              </li>
              <li className="expirationDate">
                <span>유통기한: 별도 표기</span>
              </li>
              <li className="howToKeep">
                <span>보관방법: 냉장 보관</span>
              </li>
            </ul>
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
                <button className="decreaseQuantity" onClick={decreaseQuantity}>
                  ➖
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
