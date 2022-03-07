import React, { useState, useEffect } from 'react';
import introList from './IntroList';
import ReviewList from './ReviewList';
import './Detail.scss';

function Detail() {
  const [quantity, setQuantity] = useState(1);
  const [reviewData, setReviewData] = useState([]);
  const [order, setOrder] = useState('createdAt');
  const price = 24000;

  const increaseQuantity = () => {
    setQuantity(quantity => quantity + 1);
  };
  const decreaseQuantity = () => {
    quantity > 1 ? setQuantity(quantity => quantity - 1) : setQuantity(1);
  };

  const totalPrice = price * quantity;

  useEffect(() => {
    fetch('/data/reviewData.json')
      .then(res => res.json())
      .then(data => {
        setReviewData(data);
      });
  }, []);

  const handleNewestClick = () => {
    setOrder('createdAt');
  };

  const handleBestClick = () => {
    setOrder('reviewRate');
  };

  const handleWorstClick = () => {
    setOrder('reviewRate');
  };

  const sortedReviewData = reviewData.sort((a, b) => {
    return a.order - b.order;
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
            <button onClick={handleNewestClick}>최신순</button>
            <button onClick={handleBestClick}>평점 높은 순</button>
            <button onClick={handleWorstClick}>평점 낮은 순</button>
          </section>
          <ReviewList reviewData={sortedReviewData} />
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
