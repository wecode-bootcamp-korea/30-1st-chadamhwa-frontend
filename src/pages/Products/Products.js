import React from 'react';
import Nav from '../../components/Nav/Nav';
import Subnav from '../../components/Subnav/Subnav';
import Footer from '../../components/Footer/Footer';
import './Products.scss';

function Products() {
  return (
    <>
      {/* <Nav /> */}
      {/* <Subnav /> */}
      <main className="main">
        <div className="wrapper">
          <div className="banner" />
          <div className="title">전체 상품</div>
          <div className="sub-title">차담화가 자신있게 선보입니다.</div>
          <div className="contents-wrapper">
            <div className="filters">
              <div className="filter-categories">
                <div className="filter-title">차 종</div>
                <button>뿌리차</button>
                <button>견과류차</button>
                <button>꽃잎차</button>
                <button>과일차</button>
              </div>
              <div className="filter-caffein">
                <div className="filter-title">카페인</div>
                <button>유</button>
                <button>무</button>
              </div>
              <div className="filter-price">
                <div className="filter-title">가 격</div>
                <input type="range" />
              </div>
            </div>
            <div className="contents" />
          </div>
        </div>
      </main>
      {/* <Footer /> */}
    </>
  );
}

export default Products;
