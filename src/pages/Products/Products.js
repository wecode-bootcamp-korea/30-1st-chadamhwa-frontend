import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Subnav from '../../components/Subnav/Subnav';
import Product from './Product';

import './Products.scss';

function Products() {
  const [productsList, setProductsList] = useState([]);
  const [category, setCategory] = useState([
    '뿌리차',
    '과일차',
    '곡물차',
    '잎차',
  ]);
  const [categoryCheck, setCategoryCheck] = useState(['', '', '', '']);
  const [isCaffeine, setIsCaffeine] = useState(false);
  const [isDecaffeine, setIsDecaffeine] = useState(false);
  const [priceRange, setPriceRange] = useState(0);
  const [sortByKey, setSortByKey] = useState('최신순');

  const sortByCheck = {
    최신순: 'newest',
    오래된순: 'oldest',
    리뷰순: 'review',
  };

  const location = useLocation();

  useEffect(() => {
    fetch('http://10.58.2.110:8000/drinks/products?sort_by=newest')
      .then(res => res.json())
      .then(data => setProductsList(data.result));
  }, []);

  useEffect(() => {
    let addPath = '?';
    const caffeineCheck = isCaffeine ? 'True' : 'False';

    addPath = addPath + 'sort_by=' + sortByCheck[sortByKey];

    if (categoryCheck) {
      addPath = addPath + '&category=';
    }

    if (isCaffeine || isDecaffeine) {
      addPath = addPath + '&is_caffeinated=' + caffeineCheck;
    }

    if (priceRange) {
      addPath = addPath + '&price_upper=' + priceRange;
    }

    fetch('http://10.58.2.110:8000/drinks/products' + addPath)
      .then(res => res.json())
      .then(data => setProductsList(data.result));

    console.log(addPath);
  }, [categoryCheck, sortByKey, priceRange, isCaffeine, isDecaffeine]);

  function btnHandler({ target }) {
    activeBtn();
  }

  function activeBtn({ target }) {
    target.classList.contains('active-btn')
      ? target.classList.remove('active-btn')
      : target.classList.add('active-btn');
  }

  function activeBtnCaffeine({ target }) {
    target.innerText === '카페인'
      ? caffeineToggler(true)
      : caffeineToggler(false);
  }

  function caffeineToggler(caffeine) {
    if (caffeine) {
      isDecaffeine && setIsDecaffeine(!isDecaffeine);
      setIsCaffeine(!isCaffeine);
    } else {
      isCaffeine && setIsCaffeine(!isCaffeine);
      setIsDecaffeine(!isDecaffeine);
    }
  }

  return (
    <>
      <Subnav />
      <main className="main">
        <div className="wrapper">
          <div className="banner">
            <img src="/images/products-banner.png" alt="products-banner" />
          </div>
          <div className="title">전체 상품</div>
          <div className="sub-title">차담화가 자신있게 선보입니다.</div>
          <div className="contents-wrapper">
            <div className="filters">
              <div className="filter-categoriesBox">
                <div className="filter-title">차 종</div>
                {category.map((category, idx) => (
                  <button key={idx} className="filter-btn" onClick={btnHandler}>
                    {category}
                  </button>
                ))}
              </div>
              <div className="filter-caffeineBox">
                <div className="filter-title">카페인</div>
                <button
                  className={`filter-btn ${isCaffeine ? 'active-btn' : ''}`}
                  onClick={activeBtnCaffeine}
                >
                  카페인
                </button>
                <button
                  className={`filter-btn ${isDecaffeine ? 'active-btn' : ''}`}
                  onClick={activeBtnCaffeine}
                >
                  디카페인
                </button>
              </div>
              <div className="filter-priceBox">
                <div className="filter-price">
                  <div className="filter-title">가 격</div>
                  <div className="slider-wrapper">
                    <input
                      type="range"
                      max="200000"
                      step="1000"
                      onInput={e => {
                        setPriceRange(e.target.value);
                      }}
                    />
                    <div className="price-range">{priceRange}</div>
                  </div>
                </div>
                <select
                  className="filter-sortby"
                  onChange={e => {
                    setSortByKey(e.target.value);
                  }}
                >
                  <option value="최신순">최신순</option>
                  <option value="오래된순">오래된순</option>
                  <option value="리뷰순">리뷰순</option>
                </select>
              </div>
            </div>
            <div className="products">
              {productsList.map(product => {
                return <Product key={product.id} productData={product} />;
              })}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Products;
