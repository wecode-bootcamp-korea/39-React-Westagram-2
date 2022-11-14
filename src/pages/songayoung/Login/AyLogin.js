import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.scss';

export default function AyLogin() {
  const loginInfo = () => {
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

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const saveUserEmail = event => {
    setEmail(event.target.value);
  };
  const saveUserPassword = event => {
    setPassword(event.target.value);
  };

  const isValid = email.indexOf('@') !== -1 && password.length >= 8;

  const loginSucess = () => {
    isValid
      ? navigate('/songayoung/main')
      : alert('비밀번호가 일치하지 않습니다.');
  };

  return (
    <>
      <title>Westagram</title>
      <div className="login">
        <div className="container">
          <div className="inner">
            <form className="form">
              <h1>Westagram</h1>
              <div className="inputBox">
                <input
                  id="id"
                  type="text"
                  placeholder="전화번호, 사용자 이름 또는 이메일"
                  onChange={saveUserEmail}
                />
              </div>
              <div className="inputBox">
                <input
                  id="password"
                  type="password"
                  placeholder="비밀번호"
                  onChange={saveUserPassword}
                />
              </div>
              <div className="buttonBox">
                <button
                  type="button"
                  disabled={!isValid}
                  className="btn"
                  onClick={loginInfo}
                >
                  로그인
                </button>
              </div>
            </form>
            <div className="passwordForget">
              <Link>
                <span>비밀번호를 잊으셨나요?</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
