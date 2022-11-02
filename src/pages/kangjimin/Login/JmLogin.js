import React from 'react';
import { Link } from 'react-router-dom';
/* import { useNavigate } from "react-router-dom"; */
import './Login.scss';
import '../../../styles/reset.scss';
import '../../../styles/common.scss';

export default function JmLogin() {
  return (
    <div className="loginBorder">
      <div className="font">Westagram</div>
      <div className="inputBox">
        <div className="inputWrap">
          <input
            className="id"
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
          />
        </div>
        <div className="inputWrap">
          <input className="pw" type="password" placeholder="비밀번호" />
        </div>
      </div>
      <div className="loginBtn">
        <button
          className="button"
          disabled /* onclick="location.href='main.html'" */
        >
          <Link to="/kangjimin/main">로그인</Link>
        </button>
      </div>
      <a href="">비밀번호를 잊으셨나요?</a>
    </div>
  );
}
