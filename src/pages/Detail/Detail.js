import React, { useState, useEffect } from 'react';
import SubNav from '../../components/Subnav/Subnav';
import Intro from './Intro';
import ReviewList from './ReviewList';
import './Detail.scss';

function Detail() {
  const [quantity, setQuantity] = useState(1);
  const [detailData, setDetailData] = useState([]);
  const [rate, setRate] = useState(0);
  const [comment, setComment] = useState('');

  useEffect(() => {
    fetch('http://10.58.7.52:8000/reviews/comments/1')
      .then(res => res.json())
      .then(data => setDetailData(data.review));
  }, []);

  const price = Math.floor(detailData[0].price);

  const increaseQuantity = () => {
    setQuantity(quantity => quantity + 1);
  };
  const decreaseQuantity = () => {
    quantity > 1 ? setQuantity(quantity => quantity - 1) : setQuantity(1);
  };

  const totalPrice = price * quantity;

  const handleReviewData = e => {
    e.preventDefault();
    fetch('http://??', {
      method: 'POST',
      body: JSON.stringify({}),
      // user: username,
      // drink_id: boughtProduct,
      rating: rate,
      comment: comment,
    })
      .then(response => response.json())
      .then(response => setDetailData(response));
  };

  const getRate = e => {
    setRate(e.target.value);
  };

  const getComment = e => {
    setComment(e.target.value);
  };

  return (
    detailData.length > 0 && (
      <>
        <SubNav />
        <div className="detail">
          <div className="leftSide">
            <section className="productIntro">
              <div className="productMainImage">
                <img
                  className="productImg"
                  src={detailData[0].thumb_img}
                  alt="Product"
                />
              </div>
              <div className="productIntroduction">
                <ul>
                  <Intro productData={detailData[0]} />
                </ul>
              </div>
            </section>
            <div className="productDetails">
              <img
                className="productDetailImage"
                src={detailData[0].detail_img}
                alt="Product details"
              />
            </div>
            <div name="review" className="review">
              <div id="reviewInDetail" className="review">
                <button className="reviewBtn">리뷰</button>
              </div>
              <form onSubmit={handleReviewData}>
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
              <ReviewList reviewData={detailData} />
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
      </>
    )
  );
}

export default Detail;
