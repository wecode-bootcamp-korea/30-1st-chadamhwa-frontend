import React from 'react';
import './Login.scss';
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';

function Login() {
  return (
    <>
      <Nav />
      <section>
        <div class="inner">
          <div class="wrap">
            <div class="login">로그인</div>

            <div class="detail_info">
              <form>
                <div class="wrap">
                  <span>이메일</span>
                  <input type="text" placeholder="이메일을 입력해주세요" />
                </div>
                <div class="wrap">
                  <span>비밀번호</span>
                  <input
                    type="password"
                    placeholder="비밀번호를 입력해주세요"
                  />
                </div>

                <button type="submit">로그인</button>
              </form>
            </div>

            <div class="search">
              <div class="wrap">
                <a href="#">아이디 찾기</a>
                <a href="#">비밀번호 찾기</a>
                <a href="#">회원가입(+ 100,000P)</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Login;
