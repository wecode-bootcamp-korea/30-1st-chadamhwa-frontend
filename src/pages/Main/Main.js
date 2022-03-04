import React from 'react';
import './Main.scss';
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';
import Subnav from '../../components/Subnav/Subnav';
import Section from './Section/Section';

function Main() {
  return (
    <>
      {/* <Nav /> */}
      {/* <Subnav /> */}
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
      <Section
        className="section"
        img="/images/sommelier.png"
        span='"어떤 차를 마실지 고민이라면, 이 차는 어때요 ?"'
        p="차담화 전통차 티소믈리에의 이번 주 P.I.C.K!"
      />

      <Section
        className="section"
        img="/images/mountain.png"
        span='"요즈음 많이 지치고 피곤하시나요 ?"'
        p="태백산맥의 정기를 이어 받은 축복의 찻잎이 준비되어 있습니다 !"
      />

      <Section
        className="section"
        img="/images/jeju.png"
        span='"내 거친 생각과 불안한 눈빛과 그걸 지켜보는 하르방"'
        p="하르방's Must Have I.T.E.M !"
      />

      <Section
        className="section"
        img="/images/beach.png"
        span='"들리시나요 ? 해풍을 뚫고 온 찻잎의 소리가.."'
        p="장인의 정신으로 한 땀 한 땀 손수 말린 찻잎 !"
      />

      <Section
        className="section"
        img="/images/flowers.png"
        span='"거울아 거울아 세상에서 누가 제일 예쁘니 ?"'
        p="꽃잎차를 머금은 당신이 제일 예뻐요 !"
      />

      <Section
        className="section"
        img="/images/green-tea.png"
        span='"나만의 시간이 필요하시나요 ?"'
        p="차담화와 함께 우리만의 시간을 즐겨보아요 !"
      />

      {/* <Footer /> */}
    </>
  );
}

export default Main;
