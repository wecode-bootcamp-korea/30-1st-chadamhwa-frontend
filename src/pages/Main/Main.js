import React from 'react';
import './Main.scss';
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';
import Subnav from '../../components/Subnav/Subnav';

function Main() {
  return (
    <>
      <Nav />
      <Subnav />
      <figure className="figure">
        <div className="wrap">
          <button className="left-btn">
            <i className="fa fa-chevron-circle-left" aria-hidden="true" />
          </button>
          <button className="right-btn">
            <i className="fa fa-chevron-circle-right" aria-hidden="true" />
          </button>
        </div>
      </figure>
      <section className="section">
        <div className="inner">
          <img src="/images/sommelier.png" alt="tea-sommelier" />
          <span>"어떤 차를 마실지 고민이라면, 이 차는 어때요?"</span>
          <p>차담화 전통차 티소믈리에의 이번 주 P.I.C.K!</p>
          <div className="more-btn">
            <a href="/">더보기 ></a>
          </div>

          <div className="slider">
            <a href="/">
              <i className="fa fa-chevron-left" aria-hidden="true" />
            </a>
            <div className="product-box">
              <div className="wrap">
                <img src="/images/product1.JPG" alt="tea1" />
                <span>허니비 티</span>
                <span>8,000원</span>
                <span>
                  <i className="fa fa-star" aria-hidden="true" />
                  <span className="bold">
                    <span className="bold"> 4.9</span>{' '}
                  </span>{' '}
                  | 리뷰 : 8
                </span>
              </div>

              <div className="wrap">
                <img src="/images/product2.JPG" alt="tea2" />
                <span>구름뭉게 원기옥 티</span>
                <span>9,000원</span>
                <span>
                  <i className="fa fa-star" aria-hidden="true" />
                  <span className="bold"> 5.0</span> | 리뷰 : 10
                </span>
              </div>

              <div className="wrap">
                <img src="/images/product3.JPG" alt="tea3" />
                <span>홍홍 티</span>
                <span>6,000원</span>
                <span>
                  <i className="fa fa-star" aria-hidden="true" />
                  <span className="bold"> 4.2</span> | 리뷰 : 1
                </span>
              </div>

              <div className="wrap">
                <img src="/images/product4.JPG" alt="tea4" />
                <span>라일라 소울비 티</span>
                <span>12,000원</span>
                <span>
                  <i className="fa fa-star" aria-hidden="true" />
                  <span className="bold"> 4.7</span> | 리뷰 : 3
                </span>
              </div>
            </div>
            <a href="/">
              <i className="fa fa-chevron-right" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="inner">
          <img src="/images/mountain.png" alt="mountain" />
          <span>"요즈음 많이 지치고 피곤하시나요 ?"</span>
          <p>태백산맥의 정기를 이어 받은 축복의 찻잎이 준비되어 있습니다 !</p>
          <div className="more-btn">
            <a href="/">더보기 ></a>
          </div>

          <div className="slider">
            <a href="/">
              <i className="fa fa-chevron-left" aria-hidden="true" />
            </a>
            <div className="product-box">
              <div className="wrap">
                <img src="/images/product1.JPG" alt="tea1" />
                <span>허니비 티</span>
                <span>8,000원</span>
                <span>
                  <i className="fa fa-star" aria-hidden="true" />
                  <span className="bold">
                    <span className="bold"> 4.9</span>{' '}
                  </span>{' '}
                  | 리뷰 : 8
                </span>
              </div>

              <div className="wrap">
                <img src="/images/product2.JPG" alt="tea2" />
                <span>구름뭉게 원기옥 티</span>
                <span>9,000원</span>
                <span>
                  <i className="fa fa-star" aria-hidden="true" />
                  <span className="bold"> 5.0</span> | 리뷰 : 10
                </span>
              </div>

              <div className="wrap">
                <img src="/images/product3.JPG" alt="tea3" />
                <span>홍홍 티</span>
                <span>6,000원</span>
                <span>
                  <i className="fa fa-star" aria-hidden="true" />
                  <span className="bold"> 4.2</span> | 리뷰 : 1
                </span>
              </div>

              <div className="wrap">
                <img src="/images/product4.JPG" alt="tea4" />
                <span>라일라 소울비 티</span>
                <span>12,000원</span>
                <span>
                  <i className="fa fa-star" aria-hidden="true" />
                  <span className="bold"> 4.7</span> | 리뷰 : 3
                </span>
              </div>
            </div>
            <a href="/">
              <i className="fa fa-chevron-right" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="inner">
          <img src="/images/jeju.png" alt="jeju" />
          <span>"내 거친 생각과 불안한 눈빛과 그걸 지켜보는 하르방"</span>
          <p>하르방님 must have I.T.E.M !</p>
          <div className="more-btn">
            <a href="/">더보기 ></a>
          </div>

          <div className="slider">
            <a href="/">
              <i className="fa fa-chevron-left" aria-hidden="true" />
            </a>
            <div className="product-box">
              <div className="wrap">
                <img src="/images/product1.JPG" alt="tea1" />
                <span>허니비 티</span>
                <span>8,000원</span>
                <span>
                  <i className="fa fa-star" aria-hidden="true" />
                  <span className="bold">
                    <span className="bold"> 4.9</span>{' '}
                  </span>{' '}
                  | 리뷰 : 8
                </span>
              </div>

              <div className="wrap">
                <img src="/images/product2.JPG" alt="tea2" />
                <span>구름뭉게 원기옥 티</span>
                <span>9,000원</span>
                <span>
                  <i className="fa fa-star" aria-hidden="true" />
                  <span className="bold"> 5.0</span> | 리뷰 : 10
                </span>
              </div>

              <div className="wrap">
                <img src="/images/product3.JPG" alt="tea3" />
                <span>홍홍 티</span>
                <span>6,000원</span>
                <span>
                  <i className="fa fa-star" aria-hidden="true" />
                  <span className="bold"> 4.2</span> | 리뷰 : 1
                </span>
              </div>

              <div className="wrap">
                <img src="/images/product4.JPG" alt="tea4" />
                <span>라일라 소울비 티</span>
                <span>12,000원</span>
                <span>
                  <i className="fa fa-star" aria-hidden="true" />
                  <span className="bold"> 4.7</span> | 리뷰 : 3
                </span>
              </div>
            </div>
            <a href="/">
              <i className="fa fa-chevron-right" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="inner">
          <img src="/images/beach.png" alt="beach" />
          <span>"서해안을 건너, 동해안을 건너, 남해안을 건너서라도"</span>
          <p>당신이 부르면 달려갈거야~ 해풍을 뚫고서라도 !</p>
          <div className="more-btn">
            <a href="/">더보기 ></a>
          </div>

          <div className="slider">
            <a href="/">
              <i className="fa fa-chevron-left" aria-hidden="true" />
            </a>
            <div className="product-box">
              <div className="wrap">
                <img src="/images/product1.JPG" alt="tea1" />
                <span>허니비 티</span>
                <span>8,000원</span>
                <span>
                  <i className="fa fa-star" aria-hidden="true" />
                  <span className="bold">
                    <span className="bold"> 4.9</span>{' '}
                  </span>{' '}
                  | 리뷰 : 8
                </span>
              </div>

              <div className="wrap">
                <img src="/images/product2.JPG" alt="tea2" />
                <span>구름뭉게 원기옥 티</span>
                <span>9,000원</span>
                <span>
                  <i className="fa fa-star" aria-hidden="true" />
                  <span className="bold"> 5.0</span> | 리뷰 : 10
                </span>
              </div>

              <div className="wrap">
                <img src="/images/product3.JPG" alt="tea3" />
                <span>홍홍 티</span>
                <span>6,000원</span>
                <span>
                  <i className="fa fa-star" aria-hidden="true" />
                  <span className="bold"> 4.2</span> | 리뷰 : 1
                </span>
              </div>

              <div className="wrap">
                <img src="/images/product4.JPG" alt="tea4" />
                <span>라일라 소울비 티</span>
                <span>12,000원</span>
                <span>
                  <i className="fa fa-star" aria-hidden="true" />
                  <span className="bold"> 4.7</span> | 리뷰 : 3
                </span>
              </div>
            </div>
            <a href="/">
              <i className="fa fa-chevron-right" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="inner">
          <img src="/images/flowers.png" alt="flowers" />
          <span>"거울아 거울아 세상에서 누가 제일 예쁘니?"</span>
          <p>꽃잎차를 머금은 당신이 제일 에뻐요 !</p>
          <div className="more-btn">
            <a href="/">더보기 ></a>
          </div>

          <div className="slider">
            <a href="/">
              <i className="fa fa-chevron-left" aria-hidden="true" />
            </a>
            <div className="product-box">
              <div className="wrap">
                <img src="/images/product1.JPG" alt="tea1" />
                <span>허니비 티</span>
                <span>8,000원</span>
                <span>
                  <i className="fa fa-star" aria-hidden="true" />
                  <span className="bold">
                    <span className="bold"> 4.9</span>{' '}
                  </span>{' '}
                  | 리뷰 : 8
                </span>
              </div>

              <div className="wrap">
                <img src="/images/product2.JPG" alt="tea2" />
                <span>구름뭉게 원기옥 티</span>
                <span>9,000원</span>
                <span>
                  <i className="fa fa-star" aria-hidden="true" />
                  <span className="bold"> 5.0</span> | 리뷰 : 10
                </span>
              </div>

              <div className="wrap">
                <img src="/images/product3.JPG" alt="tea3" />
                <span>홍홍 티</span>
                <span>6,000원</span>
                <span>
                  <i className="fa fa-star" aria-hidden="true" />
                  <span className="bold"> 4.2</span> | 리뷰 : 1
                </span>
              </div>

              <div className="wrap">
                <img src="/images/product4.JPG" alt="tea4" />
                <span>라일라 소울비 티</span>
                <span>12,000원</span>
                <span>
                  <i className="fa fa-star" aria-hidden="true" />
                  <span className="bold"> 4.7</span> | 리뷰 : 3
                </span>
              </div>
            </div>
            <a href="/">
              <i className="fa fa-chevron-right" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="inner">
          <img src="/images/green-tea.png" alt="green-tea" />
          <span>"나만의 시간이 필요하시나요?"</span>
          <p>차담화와 함께하는 우리만의 시간 !</p>
          <div className="more-btn">
            <a href="/">더보기 ></a>
          </div>

          <div className="slider">
            <a href="/">
              <i className="fa fa-chevron-left" aria-hidden="true" />
            </a>
            <div className="product-box">
              <div className="wrap">
                <img src="/images/product1.JPG" alt="tea1" />
                <span>허니비 티</span>
                <span>8,000원</span>
                <span>
                  <i className="fa fa-star" aria-hidden="true" />
                  <span className="bold">
                    <span className="bold"> 4.9</span>{' '}
                  </span>{' '}
                  | 리뷰 : 8
                </span>
              </div>

              <div className="wrap">
                <img src="/images/product2.JPG" alt="tea2" />
                <span>구름뭉게 원기옥 티</span>
                <span>9,000원</span>
                <span>
                  <i className="fa fa-star" aria-hidden="true" />
                  <span className="bold"> 5.0</span> | 리뷰 : 10
                </span>
              </div>

              <div className="wrap">
                <img src="/images/product3.JPG" alt="tea3" />
                <span>홍홍 티</span>
                <span>6,000원</span>
                <span>
                  <i className="fa fa-star" aria-hidden="true" />
                  <span className="bold"> 4.2</span> | 리뷰 : 1
                </span>
              </div>

              <div className="wrap">
                <img src="/images/product4.JPG" alt="tea4" />
                <span>라일라 소울비 티</span>
                <span>12,000원</span>
                <span>
                  <i className="fa fa-star" aria-hidden="true" />
                  <span className="bold"> 4.7</span> | 리뷰 : 3
                </span>
              </div>
            </div>
            <a href="/">
              <i className="fa fa-chevron-right" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Main;
