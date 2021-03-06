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
                <button className="reviewBtn">??????</button>
              </div>
              <form onSubmit={handleReviewData}>
                <div>
                  <i className="fa fa-star" aria-hidden="true" />
                  <input
                    type="number"
                    min="1"
                    max="5"
                    placeholder="??????"
                    onChange={getRate}
                    value={rate}
                  />
                </div>
                <input
                  type="textarea"
                  placeholder="?????? ??????"
                  className="commentInput"
                  onChange={getComment}
                  value={comment}
                />
                <button>??????</button>
              </form>
              <ReviewList reviewData={detailData} />
            </div>
          </div>
          <div className="rightSideWrapper">
            <div className="rightSide">
              <ul>
                <li className="quantity">
                  <span>??????</span>
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
                      ???
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
                  <span>??? ?????? ??????</span>
                </li>
                <div className="totalPrice">
                  <li>
                    <span className="totalPrice">{totalPrice}???</span>
                  </li>
                </div>
                <li className="deliveryFee">
                  <span>+(????????????) 3,000???</span>
                </li>
                <li className="additionalDeliveryFee">
                  <span>+(????????? ??? ????????????) 3,000???</span>
                </li>
                <li className="freeDeliveryFee">
                  <span>??? ???????????? 50,000??? ?????? ?????? ??? ????????? ??????!</span>
                </li>
              </ul>
              <section className="rightSideBtn">
                <button>???????????? ??????</button>
                <button>?????? ????????????</button>
              </section>
            </div>
          </div>
        </div>
      </>
    )
  );
}

export default Detail;
