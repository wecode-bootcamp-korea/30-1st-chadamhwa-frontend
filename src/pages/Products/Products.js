import React, { useState, useEffect } from 'react';
// import Nav from '../../components/Nav/Nav';
// import Subnav from '../../components/Subnav/Subnav';
// import Footer from '../../components/Footer/Footer';
import './Products.scss';

function Products() {
  const [categoriesList, setCategoriesList] = useState([
    '뿌리차',
    '과일차',
    '견과류차',
    '잎차',
  ]);
  const [isCaffeine, setIsCaffeine] = useState(false);
  const [isDecaffeine, setIsDecaffeine] = useState(false);
  // const [productsList, setProductsList] = useState([]);

  // useEffect(() => {
  //   fetch('http://10.58.2.110:8000/damhwamarket/test')
  //     .then(res => res.json())
  //     .then(data => setCategoriesList(data.message));
  // }, []);

  function activeBtn({ target }) {
    target.classList.contains('active-btn')
      ? target.classList.remove('active-btn')
      : target.classList.add('active-btn');
  }

  function activeBtnCaffeine({ target }) {
    target.classList.contains('caffeine')
      ? caffeineToggler(true, isDecaffeine)
      : caffeineToggler(false, isCaffeine);
  }

  function caffeineToggler(caffeine, toggle) {
    if (caffeine) {
      if (isDecaffeine == true) {
        setIsDecaffeine(!isDecaffeine);
        setIsCaffeine(!isCaffeine);
      }
      setIsCaffeine(!isCaffeine);
    } else {
      if (isCaffeine == true) {
        setIsCaffeine(!isCaffeine);
        setIsDecaffeine(!isDecaffeine);
      }
      setIsDecaffeine(!isDecaffeine);
    }
  }

  return (
    <>
      {/* <Nav /> */}
      {/* <Subnav /> */}
      <main className="main">
        <div className="wrapper">
          <div className="banner">
            <img src="/images/products-banner.png" alt="products-banner" />
          </div>
          <div className="title">전체 상품</div>
          <div className="sub-title">차담화가 자신있게 선보입니다.</div>
          <div className="contents-wrapper">
            <div className="filters">
              <div className="filter-categories">
                <div className="filter-title">차 종</div>
                {categoriesList.map((category, idx) => (
                  <button key={idx} className="filter-btn" onClick={activeBtn}>
                    {category}
                  </button>
                ))}
              </div>
              <div className="filter-caffeine">
                <div className="filter-title">카페인</div>
                <button
                  className={`filter-btn caffeine ${
                    isCaffeine ? 'active-btn' : ''
                  }`}
                  onClick={activeBtnCaffeine}
                >
                  카페인
                </button>
                <button
                  className={`filter-btn decaffeine ${
                    isDecaffeine ? 'active-btn' : ''
                  }`}
                  onClick={activeBtnCaffeine}
                >
                  디카페인
                </button>
              </div>
              <div className="filter-price">
                <div className="filter-title">가 격</div>
                <div className="slider-wrapper">
                  <input type="range" />
                </div>
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
