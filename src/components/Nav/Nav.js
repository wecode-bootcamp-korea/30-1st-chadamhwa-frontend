import React from 'react';
import './Nav.scss';

function Nav() {
  return (
    <nav className="nav">
      <div className="inner">
        <div className="logo">
          <img src="images/logo.jpeg" alt="logo" />
          <h1 className="logo-title">ㅊㄷㅎ</h1>
        </div>
        <div className="menu">
          <div className="market-btn">
            <a href="#">담화마켓(스토어)</a>
          </div>
          <div className="login-btn">
            <a href="#">로그인</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
