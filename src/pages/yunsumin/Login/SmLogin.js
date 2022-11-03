import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SmLogin.scss';
function SmLogin() {
  const navigate = useNavigate();
  const onClickButton = () => {
    navigate('/yunsumin/Main');
  };

  return (
    <div className="loginPage">
      <div className="mainLogin">
        <div className="logo">
          <h1>Westagram</h1>
        </div>

        <div className="loginbar">
          <form>
            <input
              className="idInput"
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
            />
            <input className="pwInput" type="password" placeholder="비밀번호" />
            <button
              className="login-bt btstyle"
              type="submit"
              onClick={onClickButton}
            >
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
