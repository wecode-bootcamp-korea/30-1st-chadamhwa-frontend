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
          <img src="/images/leaf.png" alt="leaf" />
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
          <img src="/images/sofa.png" alt="sofa" />
          <span>"여유로운 나만의 시간을 완성시켜 줄 거예요"</span>
          <p>드라마, 영화 보면서 홀-짝이기 좋은 차!</p>
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
          <img src="/images/donut.png" alt="donut" />
          <span>"기분 좋은 달콤 쌉싸름함이 입안 가득 퍼져요"</span>
          <p>달달한 간식과 함께 마시기 좋은 차!</p>
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
          <img src="/images/cafe.png" alt="cafe" />
          <span>"나만의 분위기로 만드는 홈카페, 어떤가요?"</span>
          <p>코로나로 인한 집콕 생활, 나만의 홈카페 감성을 만들 수 있어요!</p>
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
          <img src="/images/party.png" alt="party" />
          <span>"간단한 간식만으로도 맛있는 자리를 만들 수 있어요"</span>
          <p>급하게 준비해야 할 때, 격식을 갖추어야만 하는 자리에 유용해요!</p>
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
          <img src="/images/present.png" alt="present" />
          <span>"소중한 사람을 위한 선물이 고민되시나요?"</span>
          <p>소중한 사람에게 어울릴 차를 커스텀 할 수 있는 기회!</p>
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
