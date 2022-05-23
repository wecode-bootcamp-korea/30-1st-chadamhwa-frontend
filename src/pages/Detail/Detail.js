import React, { useState, useEffect } from 'react';
import SubNav from '../../components/Subnav/Subnav';
import Intro from './Intro';
import ReviewList from './ReviewList';
import './Detail.scss';

function Detail() {
  const [quantity, setQuantity] = useState(1);
  const [productData, setProductData] = useState({});
  const [reviewData, setReviewData] = useState([]);
  const [rate, setRate] = useState(0);
  const [comment, setComment] = useState('');

  useEffect(() => {
    fetch(
      'http://ec2-3-35-214-28.ap-northeast-2.compute.amazonaws.com:8000/drinks/details/7'
    )
      .then(res => res.json())
      .then(data => setProductData(data.review));
  }, []);

  useEffect(() => {
    fetch(
      'http://ec2-3-35-214-28.ap-northeast-2.compute.amazonaws.com:8000/reviews/comments/7'
    )
      .then(res => res.json())
      .then(data => setReviewData(data.review));
  }, []);

  const price = productData.drink && Math.floor(productData.drink.price);

  const increaseQuantity = () => {
    setQuantity(quantity => quantity + 1);
  };
  const decreaseQuantity = () => {
    quantity > 1 ? setQuantity(quantity => quantity - 1) : setQuantity(1);
  };

  const totalPrice = price * quantity;

  const getRate = e => {
    setRate(e.target.value);
  };

  const getComment = e => {
    setComment(e.target.value);
  };

  return (
    <>
      <SubNav />
      {productData.image && (
        <div className="detail">
          <div className="leftSide">
            <section className="productIntro">
              <div className="productMainImage">
                <img
                  className="productImg"
                  src={productData.image.thumbnail}
                  alt="Product"
                />
              </div>
              <div className="productIntroduction">
                <ul>
                  <Intro productData={productData} />
                </ul>
              </div>
            </section>
            <div className="productDetails">
              <img
                className="productDetailImage"
                src={productData.image.detail}
                alt="Product details"
              />
            </div>
            <div name="review" className="review">
              <div id="reviewInDetail" className="review">
                <button className="reviewBtn">리뷰</button>
              </div>
              <form>
                <div>
                  <i className="fa fa-star" aria-hidden="true" />
                  <input
                    type="number"
                    min="1"
                    max="5"
                    placeholder="별점"
                    onChange={getRate}
                    value={rate}
                  />
                </div>
                <input
                  type="textarea"
                  placeholder="리뷰 내용"
                  className="commentInput"
                  onChange={getComment}
                  value={comment}
                />
                <button>입력</button>
              </form>
              <ReviewList reviewData={reviewData} />
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
                    <button
                      className="increaseQuantity"
                      onClick={increaseQuantity}
                    >
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
      )}
    </>
  );
}

export default Detail;
