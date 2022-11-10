import React, { useState, useEffect } from 'react';
import AsideFooter from './Aside';
import Feed from './Feed';
import './Main.scss';
import '../../../styles/reset.scss';
import '../../../styles/common.scss';

function JmMain() {
  const [feedList, setFeedList] = useState([]);

  useEffect(() => {
    fetch('/data/feedData.json', { method: 'GET' })
      .then(res => res.json())
      .then(data => {
        setFeedList(data);
      });
  });

  return (
    <>
      <nav>
        <div className="navi">
          <div className="logo">
            <img
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/logo.png"
              alt=""
            />
            <div className="font">Westagram</div>
          </div>

          <div className="search">
            <i className="fas fa-search" />
            <input type="text" placeholder="검색" />
          </div>

          <div className="right-nav">
            <img
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
              alt=""
            />
            <img
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
              alt=""
            />
            <img
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
              alt=""
            />
          </div>
        </div>
      </nav>

      <div className="main">
        <div className="feeds">
          <article>
            {feedList.map(feed => (
              <Feed key={feed.id} feed={feed} />
            ))}
          </article>
        </div>

        <div className="main-right">
          <div className="user">
            <img
              className="profile-right"
              src="/images/kangjimin/cat2.jpg"
              alt=""
            />
            <span className="id">mingming</span>
          </div>

          <div className="story">
            <div className="title">
              <span>스토리</span>
              <span>모두 보기</span>
            </div>
            <div className="list">
              <div className="story-one">
                <div className="story-profile">
                  <img
                    className="profile"
                    src="/images/kangjimin/cat4.jpg"
                    alt=""
                  />
                </div>
                <div className="userinfo">
                  <span className="id">nananana</span>
                  <p>10분 전</p>
                </div>
              </div>
              <div className="story-two">
                <div className="story-profile">
                  <img
                    className="profile"
                    src="/images/kangjimin/cat5.jpg"
                    alt=""
                  />
                </div>
                <div className="userinfo">
                  <span className="id">lalal</span>
                  <p>21분 전</p>
                </div>
              </div>
              <div className="story-three">
                <div className="story-profile">
                  <img
                    className="profile"
                    src="/images/kangjimin/cat6.jpg"
                    alt=""
                  />
                </div>
                <div className="userinfo">
                  <span className="id">hehehe</span>
                  <p>3시간 전</p>
                </div>
              </div>
              <div className="story-four">
                <div className="story-profile">
                  <img
                    className="profile"
                    src="/images/kangjimin/cat7.jpg"
                    alt=""
                  />
                </div>
                <div className="userinfo">
                  <span className="id">lullullul</span>
                  <p>10시간 전</p>
                </div>
              </div>
            </div>
          </div>

          <div className="recommend">
            <div className="title">
              <span>회원님을 위한 추천</span>
              <span>모두 보기</span>
            </div>
            <div className="list">
              <div className="recommend-one">
                <img
                  className="profile"
                  src="/images/kangjimin/cat8.jpg"
                  alt=""
                />
                <div className="userinfo">
                  <span className="id">joajoa</span>
                  <p>nyangnyang님 왜 2명이...</p>
                </div>
                <button>팔로우</button>
              </div>
              <div className="recommend-two">
                <img
                  className="profile"
                  src="/images/kangjimin/cat9.jpg"
                  alt=""
                />
                <div className="userinfo">
                  <span className="id">a_ing</span>
                  <p>sooooooo_cute님 외 12...</p>
                </div>
                <button>팔로우</button>
              </div>
              <div className="recommend-three">
                <img
                  className="profile"
                  src="/images/kangjimin/dog.jpg"
                  alt=""
                />
                <div className="userinfo">
                  <span className="id">bestdog</span>
                  <p>who_are_you님 외 1...</p>
                </div>
                <button>팔로우</button>
              </div>
            </div>
          </div>
          <div className="copyright">
            <p className="asideText">
              <ul>
                <AsideFooter />
              </ul>
            </p>
            <p className="copyrightC">© 2019 INSTAGRAM</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default JmMain;
