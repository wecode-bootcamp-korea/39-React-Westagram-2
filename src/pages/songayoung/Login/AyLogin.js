import React from 'react';
import './Login.scss';

function AyLogin() {
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
                />
              </div>
              <div className="inputBox">
                <input id="password" type="password" placeholder="비밀번호" />
              </div>
              <div className="buttonBox">
                <button type="button" className="btn" disabled="disabled">
                  <span>로그인</span>
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

export default AyLogin;
