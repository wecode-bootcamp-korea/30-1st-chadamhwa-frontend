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
      <button onClick={handleClick} className="cart-bar">
        <img
          className="cart"
          src="/images/shopping-cart.png"
          alt="shopping-cart"
        />
      </button>

      {teaData.length > 0 &&
        teaData.map(data => {
          return (
            <Section
              key={data.id}
              list={data.list}
              img={data.img}
              span={data.span}
              p={data.p}
            />
          );
        })}
      {/* <Footer /> */}
    </>
  );
}

export default Main;
