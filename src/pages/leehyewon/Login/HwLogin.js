import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

export default function HwLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const isValid = email.length > 5 && password.length > 5;

  const login = () => {
    fetch('http://10.58.52.105:3000/auth/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then(response => response.json())
      .then(data => localStorage.setItem('token', data.accessToken))
      .then(() => navigate('/leehyewon/main'));
  };

  const handleChangeEmail = e => {
    setEmail(e.target.value);
  };

  const handleChangePassword = e => {
    setPassword(e.target.value);
  };

  return (
    <div class="outline-box">
      <div class="instagram-logo">westagram</div>
      <form id="login-form">
        <input
          required
          class="id"
          type="text"
          placeholder="전화번호, 사용자 이름 또는 이메일"
          onChange={handleChangeEmail}
        />
        <input
          required
          class="password"
          type="password"
          placeholder="비밀번호"
          onChange={handleChangePassword}
        />
      </form>
      <div class="btnBox">
        <button class="loginBtn" onClick={login} disabled={!isValid}>
          로그인
        </button>
      </div>
      <a href="#" class="findPw">
        비밀번호를 잊으셨나요?
      </a>
    </div>
  );
}
