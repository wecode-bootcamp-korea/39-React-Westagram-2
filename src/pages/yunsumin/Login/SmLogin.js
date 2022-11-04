//React 내부에 내장되어 있는 useState함수를 import함
import React, { useState } from 'react';
//useNavigate hook을 React-router-dom에서부터 import
import { useNavigate } from 'react-router-dom';
import './SmLogin.scss';
function SmLogin() {
  // import한 useState hook은 사용 규칙에 따라 컴포넌트 선언문 최상위 블록내에서 사용해야함 (return문 위쪽)
  const [userId, setUserId] = useState(''); // userId = 동적으로 관리해줄 상태값 / setUserId = 상태값을 업데이트 하는 함수 / useState() = 상태값의 초기값을 인자로 넘겨줄수 있음
  const [userPw, setUserPw] = useState(''); // 첫 번째 요소와 두 번째 요소의 이름은 자유롭게 사용가능 / 2번째 값은 이름앞에 set을 넣어줘야함
  // id입력 창의 value를 userId state에 저장해주는 함수
  const saveUserId = event => {
    setUserId(event.target.value);
    console.log(userId);
  };
  // passwerd입력 창의 value를 userPw state에 저장해주는 함수
  const saveUserPw = event => {
    setUserPw(event.target.value);
    console.log(userPw);
  };

  return (
    <div className="loginPage">
      <div className="mainLogin">
        <div className="logo">
          <h1>Westagram</h1>
        </div>

        <div className="loginbar">
          <form onSubmit={e => e.preventDefault()}>
            <input
              className="idInput"
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              // onChange : input창의 값이 변경될때마다 지정한 함수가 실행되는 이벤트
              onChange={saveUserId}
            />
            <input
              className="pwInput"
              type="password"
              placeholder="비밀번호"
              // onChange : input창의 값이 변경될때마다 지정한 함수가 실행되는 이벤트
              onChange={saveUserPw}
            />
            <button className="loginBt" type="submit">
              로그인
            </button>
          </form>

          <div className="line">
            <div className="firstLine" />
            <h5>또는</h5>
            <div className="secondLine" />
          </div>

          <div className="loginToFb">
            <a href="https://www.facebook.com/">
              <span>
                <img
                  src="/images/yunsumin/free-icon-facebook-174848.png"
                  width="15px"
                  height="15px"
                  alt="페북 아이콘"
                />
              </span>
              Facebook으로 로그인
            </a>
          </div>

          <div className="pass">
            <a href="https://www.instagram.com/accounts/password/reset/">
              비밀번호를 잊으셨나요?
            </a>
          </div>
        </div>
      </div>
      <div className="join">
        <p>
          계정이 없으신가요?
          <span>
            <a href="https://www.instagram.com/accounts/emailsignup/">
              가입하기
            </a>
          </span>
        </p>
      </div>
      <div className="doun">
        <p>앱을 다운로드하세요.</p>
        <a href="https://www.apple.com/kr/app-store/">
          <img
            src="https://static.cdninstagram.com/rsrc.php/v3/yi/r/cWx_hQBPmbo.png"
            alt="App Store에서 다운로드"
          />
        </a>
        <a href="https://play.google.com/store/apps?utm_source=apac_med&utm_medium=hasem&utm_content=Oct0121&utm_campaign=Evergreen&pcampaignid=MKT-EDR-apac-kr-1003227-med-hasem-ap-Evergreen-Oct0121-Text_Search_SKWS-SKWS%7cONSEM_kwid_43700058444565162_creativeid_477138308607_device_c&gclid=CjwKCAjw79iaBhAJEiwAPYwoCBcgVPCJDvHn6wBWB1Wse88iOO3rzQBLX2zx2bJcyrhAdE9ai0gpyRoC4x8QAvD_BwE&gclsrc=aw.ds">
          <img
            src="https://static.cdninstagram.com/rsrc.php/v3/ye/r/UtJtFmFLCiD.png"
            alt="Google Play에서 다운로드"
          />
        </a>
      </div>
    </div>
  );
}
export default SmLogin;
