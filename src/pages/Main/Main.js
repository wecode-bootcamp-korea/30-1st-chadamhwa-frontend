import React, { useState, useEffect } from 'react';
import './Main.scss';
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';
import Subnav from '../../components/Subnav/Subnav';
import Figure from './Figure/Figure';
import Section from './Section/Section';
import { Navigate, useNavigate } from 'react-router';

function Main() {
  const navigate = useNavigate('');
  const [teaData, setTeaData] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/data/tea.json')
      .then(res => res.json())
      .then(data => setTeaData(data));
  }, []);
  function handleClick() {
    navigate('/cart');
  }
  return (
    <>
      {/* <Nav /> */}
      {/* <Subnav /> */}
      <Figure />

      {/* <button onClick={handleClick} className="cart-bar">
        <img
          className="cart"
          src="/images/shopping-cart.png"
          alt="shopping-cart"
        />
      </button>

      <Section
        key={teaData.id}
        list={teaData.list}
        img={teaData.img}
        span={teaData.span}
        p={teaData.p}
      />

      <Section
        img="/images/mountain.png"
        span='"요즈음 많이 지치고 피곤하시나요 ?"'
        p="태백산맥의 정기를 이어 받은 축복의 찻잎이 준비되어 있습니다 !"
      />

      <Section
        img="/images/jeju.png"
        span='"내 거친 생각과 불안한 눈빛과 그걸 지켜보는 하르방"'
        p="하르방's Must Have I.T.E.M !"
      />

      <Section
        img="/images/beach.png"
        span='"들리시나요 ? 해풍을 뚫고 온 찻잎의 소리가.."'
        p="장인의 정신으로 한 땀 한 땀 손수 말린 찻잎 !"
      />

      <Section
        img="/images/flowers.png"
        span='"거울아 거울아 세상에서 누가 제일 예쁘니 ?"'
        p="꽃잎차를 머금은 당신이 제일 예뻐요 !"
      />

      <Section
        img="/images/green-tea.png"
        span='"나만의 시간이 필요하시나요 ?"'
        p="차담화와 함께 우리만의 시간을 즐겨보아요 !"
      />

      {/* <Footer /> */}
    </>
  );
}

export default Main;
