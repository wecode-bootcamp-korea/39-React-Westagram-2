import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

export default function AyLogin() {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const navigate = useNavigate();

  const saveUserId = event => {
    setId(event.target.value);
  };
  const saveUserPw = event => {
    setPw(event.target.value);
  };

  const isValid = id.indexOf('@') !== -1 && pw.length >= 8;

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
                  disabled={disable}
                  className="btn"
                  onClick={loginSucess}
                >
                  로그인
                </button>
              </div>
            </form>
            <div className="passwordForget">
              <a href>
                <span>비밀번호를 잊으셨나요?</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
