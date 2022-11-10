import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

export default function AyLogin() {
  const check = () => {
    fetch('http://10.58.52.237:3000/auth/signin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then(response => response.json())
      .then(data => console.log(data));
  };

  const [email, setId] = useState('');
  const [password, setPw] = useState('');
  const navigate = useNavigate();

  const saveUserId = event => {
    setId(event.target.value);
  };
  const saveUserPw = event => {
    setPw(event.target.value);
  };

  const isValid = email.indexOf('@') !== -1 && password.length >= 8;

  const loginSucess = () => {
    isValid
      ? navigate('/songayoung/main')
      : alert('비밀번호가 일치하지 않습니다.');
  };

  const disable = isValid ? false : true;

  return (
    <>
      <title>Westagram</title>
      <div className="wrap">
        <div className="container">
          <div className="inner">
            <form className="form">
              <h1>Westagram</h1>
              <div className="inputBox">
                <input
                  id="id"
                  type="text"
                  placeholder="전화번호, 사용자 이름 또는 이메일"
                  onChange={saveUserId}
                />
              </div>
              <div className="inputBox">
                <input
                  id="password"
                  type="password"
                  placeholder="비밀번호"
                  onChange={saveUserPw}
                />
              </div>
              <div className="buttonBox">
                <button
                  type="button"
                  disabled={disable}
                  className="btn"
                  onClick={check}
                >
                  로그인
                </button>
              </div>
            </form>
            <div className="passwordForget">
              <a>
                <span>비밀번호를 잊으셨나요?</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
