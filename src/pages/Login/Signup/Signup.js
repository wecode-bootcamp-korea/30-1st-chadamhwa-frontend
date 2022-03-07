import React, { useState } from 'react';
import { useEffect } from 'react';
import './Signup.scss';

function Signup() {
  const [signupEmail, setSignUpEmail] = useState('');
  const [signupPw, setSignUpPw] = useState('');
  const [signupRePw, setSignUpRePw] = useState('');
  let SignupValid =
    signupEmail.includes('@') && signupPw.length > 5 && signupPw === signupRePw;

  function mainCondition(event) {
    event.preventDefault();
  }
  function handleInputEmail(event) {
    setSignUpEmail(event.target.value);
  }
  function handleInputPw(event) {
    setSignUpPw(event.target.value);
  }

  function joinClient() {
    fetch('', {
      method: 'post',
      body: JSON.stringify({
        email: signupEmail,
        password: signupPw,
      }),
    });
  }
  return (
    <div className="sign-up">
      <h1 className="title"> 회원 가입 </h1>
      <img className="id-card" src="/images/id-card.png" />
      <form>
        <div className="wrap">
          <span className="key">이메일</span>
          <input
            type="text"
            onChange={handleInputEmail}
            placeholder="이메일을 입력해주세요"
          />
        </div>
        <div className="wrap">
          <span className="key">비밀번호</span>
          <input
            type="password"
            onChange={handleInputPw}
            placeholder="비밀번호를 입력해주세요"
          />
        </div>
        <div className="wrap">
          <span className="key">비밀번호 확인</span>
          <input
            type="password"
            onChange={({ target }) => {
              setSignUpRePw(target.value);
            }}
            placeholder="비밀번호를 한번 더 입력해주세요"
          />
        </div>
        <div className="wrap">
          <span className="key">술담화를 어떻게 아셨나요?</span>
          <select>
            <option value="">선택해주세요</option>
            <option value="">지인소개</option>
            <option value="">블로그</option>
            <option value="">인스타그램</option>
            <option value="">페이스북</option>
            <option value="">유투브</option>
            <option value="">검색</option>
            <option value="">기사 / 언론</option>
            <option value="">기타</option>
          </select>
        </div>
        <div className="wrap">
          <span className="necessity">
            <span className="blue">이용약관</span> 및{' '}
            <span className="blue">개인정보처리방침</span> 내용을
            <br /> 확인 하였으며,이에 동의합니다.
          </span>
          <span className="option">
            이메일 이벤트, 혜택수신 동의<span className="mild">[선택]</span>
            <input className="check" type="checkbox" />
          </span>
          <span className="option">
            SMS 이벤트, 혜택수신 동의<span className="mild">[선택]</span>
            <input className="check" type="checkbox" />
          </span>
        </div>
        <button
          onClick={mainCondition}
          className={SignupValid ? 'btn-active' : 'btn-die'}
        >
          가입완료
        </button>
      </form>
    </div>
  );
}

export default Signup;
