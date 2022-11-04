import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

let isIdVaild = false;
let isPwVaild = false;

export default function Login() {
  const navigate = useNavigate();
  const [isAllVaild, setIsAllVaild] = useState(false);

  function handleBtnActivate() {
    if (isIdVaild && isPwVaild) {
      setIsAllVaild(true);
    } else {
      setIsAllVaild(false);
    }
  }

  function handleBtnClick() {
    if (isAllVaild) {
      navigate('/leesangyoon/main');
    }
  }

  function handleBtnActivateById(event) {
    const idValue = event.target.value;
    isIdVaild = idValue.indexOf('@') !== -1 ? true : false;
    handleBtnActivate(event);
  }

  function handleBtnActivateByPw(event) {
    const PwValue = event.target.value;
    isPwVaild = PwValue.length >= 5 ? true : false;
    handleBtnActivate(event);
  }

  return (
    <div className="container">
      <div className="first-box">
        <header className="first-box__title">westagram</header>
        <section className="first-box__login-form">
          <input
            id="input-id"
            className="first-box__login-form__input"
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            onInput={event => handleBtnActivateById(event)}
          />
          <input
            id="input-pw"
            className="first-box__login-form__input"
            type="text"
            placeholder="비밀번호"
            onInput={event => handleBtnActivateByPw(event)}
          />
          <button
            className={`first-box__login-form__btn ${
              isAllVaild ? '' : 'opacity'
            }`}
            onClick={() => handleBtnClick()}
          >
            로그인
          </button>
        </section>
        <footer className="first-box__forget-pw">
          <a href="#">비밀번호를 잊으셨나요?</a>
        </footer>
      </div>

      <div className="second-box">
        <span>
          계정이 없으신가요? <a href="#">가입하기</a>
        </span>
      </div>

      <div className="third-box">
        <span className="app-download-text">앱을 다운로드하세요.</span>
        <div className="apps">
          <img
            alt="App Store"
            className="app-box"
            src="https://static.cdninstagram.com/rsrc.php/v3/yi/r/cWx_hQBPmbo.png"
          />
          <img
            alt="Google Play"
            className="app-box"
            src="https://static.cdninstagram.com/rsrc.php/v3/ye/r/UtJtFmFLCiD.png"
          />
        </div>
      </div>
    </div>
  );
}
