import React from 'react';
import './Nav.scss';

function Nav() {
  return (
    <nav>
      <div class="inner">
        <div class="logo">
          <img src="images/logo.jpeg" alt="logo" />
          <h1>ㅊ ㄷ ㅎ</h1>
        </div>
        <div class="menu">
          <div class="market_btn">
            <a href="#">담화마켓(스토어)</a>
          </div>
          <div class="login_btn">
            <a href="#">로그인</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
