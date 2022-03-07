import React from 'react';
import './Subnav.scss';

function Subnav() {
  return (
    <div className="sub-nav">
      <div className="inner">
        <a href="#">상품소개</a>
        <a href="#">선물세트</a>
        <a href="#">이벤트</a>
        <input type="text" placeholder="검색어를 입력해주세요." />
        <i className="fa fa-search" aria-hidden="true" />
      </div>
    </div>
  );
}

export default Subnav;
