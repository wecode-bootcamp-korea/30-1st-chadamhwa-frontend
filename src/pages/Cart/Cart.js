import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router';
import './Cart.scss';

function Cart() {
  let [productName, setProductName] = useState('');
  let [price, setPrice] = useState(0);
  let [quantity, setQuantity] = useState(0);
  let [amount, setAmount] = useState(0);
  const navigate = useNavigate('');

  function handleClick() {
    navigate('/');
  }
  return (
    <div className="wrap">
      <div className="cart-banner">
        <img className="cart" src="/images/cart.png" alt="cart" />
      </div>

      <div className="top">
        <h2>MY CART</h2>
        <button onClick={handleClick}>⇇ Continue shopping</button>
      </div>

      <table className="table">
        <tr className="thead">
          <th>상품</th>
          <th>가격</th>
          <th>수량</th>
          <th>총액</th>
        </tr>
        <tr className="tbody">
          <td>{setProductName}</td>
          <td>{setPrice}</td>
          <td>{setQuantity}</td>
          <td>{setAmount}}</td>
        </tr>
        <tr className="tbody">
          <td>다함께 차차차</td>
          <td>7,000 원</td>
          <td>6</td>
          <td>42000원</td>
        </tr>
      </table>

      <div className="result">
        <h3>최종 결제 금액</h3>
        <div className="bind">
          <span>총 상품 금액</span>
          <span>459,000 원</span>
        </div>
        <div className="bind">
          <span>배송비</span>
          <span>3,000 원</span>
        </div>
        <div className="bind">
          <span>적립금</span>
          <span>-0원</span>
        </div>
        <div className="bind">
          <span>할인/혜택</span>
          <span>-0원</span>
        </div>
        <div className="bind">
          <span>총 결제금액</span>
          <span>459,000 원</span>
        </div>
      </div>

      <button className="buy-btn">결제하기</button>
    </div>
  );
}

export default Cart;
