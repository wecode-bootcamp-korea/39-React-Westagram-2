import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Login.scss';
import '../../../styles/reset.scss';
import '../../../styles/common.scss';

function JmLogin() {
  const navigate = useNavigate();

  const [idValue, setIdValue] = useState('');
  const [pwValue, setPwValue] = useState('');
  const [btnActive, setBtnActive] = useState(false);

  const goMain = () => {
    if (idValue.includes('@') && pwValue.length >= 5) {
      navigate('/kangjimin/main');
    } else {
    }
  };

  const btnIsActive = () => {
    return idValue.includes('@') && pwValue.length >= 5
      ? setBtnActive(true)
      : setBtnActive(false);
  };

  return (
    <div className="loginBorder">
      <div className="font">Westagram</div>
      <div className="inputBox">
        <div className="inputWrap">
          <input
            className="id"
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            value={idValue}
            onKeyUp={btnIsActive}
            onChange={event => setIdValue(event.target.value)}
          />
        </div>
        <div className="inputWrap">
          <input
            className="pw"
            type="password"
            placeholder="비밀번호"
            value={pwValue}
            onKeyUp={btnIsActive}
            onChange={event => setPwValue(event.target.value)}
          />
        </div>
      </div>
      <div className="loginBtn">
        <button
          className={btnActive ? 'activeButton' : 'button'}
          disabled={idValue === '' || pwValue < 5 ? true : false}
          onClick={goMain}
        >
          로그인
        </button>
      </div>
      <Link to="/">비밀번호를 잊으셨나요?</Link>
    </div>
  );
}

export default JmLogin;
