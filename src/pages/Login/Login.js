import React, { useState } from 'react';
import './Login.scss';
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';

function Login() {
  let [loginEmail, setLoginEmail] = useState('');
  let [loginPw, setLoginPw] = useState('');
  let loginValid = loginEmail.includes('@') && loginPw.length > 5;
  let validInformE = loginEmail.includes('@');
  let validInformPw = loginPw.length > 5;

  function handleEmailInput(event) {
    setLoginEmail(event.target.value);
    // validInformE
    //   ? event.target.classList.remove('input-fail')
    //   : event.target.classList.add('input-fail');
    console.log(event.target.value);
  }

  function handlePwInput(event) {
    setLoginPw(event.target.value);
    // validInformPw
    //   ? event.target.classList.remove('input-fail')
    //   : event.target.classList.add('input-fail');
    console.log(event.target.value);
  }

  // function mainCondition(event) {
  //   event.preventDefault();
  //   fetch('http://10.58.5.209:8000/users/signin', {
  //     method: 'post',
  //     body: JSON.stringify({
  //       email: loginId,
  //       password: loginPw,
  //     }),
  //   })
  //     .then(response => response.json())
  //     .then(result => {
  //       if (result.message === 'SUCCESS') {
  //         alert('환영합니다!');
  //         navigate('/');
  //       } else {
  //         loginValid ? ''
  //       }
  //     });
  // }

  return (
    <>
      {/* <Nav /> */}
      <section>
        <div className="wrap">
          <div className="login">로그인</div>

          <div className="detail-info">
            <form>
              <div className="wrap">
                <span>이메일</span>
                <input
                  type="text"
                  placeholder="이메일을 입력해주세요"
                  onChange={handleEmailInput}
                />
                {/* <span>이메일을 입력해주세요</span> */}
              </div>
              <div className="wrap">
                <span>비밀번호</span>
                <input
                  type="password"
                  placeholder="비밀번호를 입력해주세요"
                  onChange={handlePwInput}
                />
                {/* <span>비밀번호를 입력해주세요</span> */}
              </div>

              <button className={loginValid ? 'btn-active' : 'btn-die'}>
                로그인
              </button>
            </form>
          </div>

          <div className="search">
            <div className="wrap">
              <a href="#">아이디 찾기</a>
              <a href="#">비밀번호 찾기</a>
              <a href="#">회원가입(+ 100,000P)</a>
            </div>
          </div>
        </div>
      </section>
      {/* <Footer /> */}
    </>
  );
}

export default Login;
