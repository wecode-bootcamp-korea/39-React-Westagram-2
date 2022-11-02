import React from 'react';
import "./Login.scss";

function LoginBtn() {
  const inputId = document.querySelector("#id");
  const inputPassword = document.querySelector("#password");
  const button = document.querySelector(".btn");

  let idValue = inputId.value;
  let passwordValue = inputPassword.value;

  if (idValue.length > 0 && passwordValue.length > 0) {
    button.disabled = false;
    button.style.cursor = "pointer";
    button.style.backgroundColor = "#1c7ed6";
  } else {
    button.disabled = true;
    button.style.cursor = "default";
    button.style.backgroundColor = "#bfdffd";
  }

  return (
    <div className="buttonBox">
      <button type="button" className="btn" disabled="disabled">
        <span>로그인</span>
      </button>
    </div>
  );
}

export default function AyLogin() {
  //함수영역
  const navigate = useNavigate();
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
              <LoginBtn></LoginBtn>
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
