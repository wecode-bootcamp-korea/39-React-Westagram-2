import React, { useState } from 'react';
import CommentList from './Comments';
import './Main.scss';
import '../../../styles/reset.scss';
import '../../../styles/common.scss';

function JmMain() {
  const [commentValue, setCommentValue] = useState('');

  const [commentArray, setCommentArray] = useState([]);
  const submitComment = () => {
    setCommentArray([...commentArray, commentValue]);
    //...스프레드연산자 공부
    setCommentValue('');
  };

  // const submitComment = e => {
  //   e.preventDefault();
  //   commentArray.push(commentValue);
  //   // setCommentValue('');
  // };

  const activeSubmit = commentValue.length > 0;

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
            <div className="user">
              <img
                className="profile"
                src="/images/kangjimin/cat2.jpg"
                alt=""
              />
              <span className="id">mingming</span>
              <img
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/more.png"
                alt=""
              />
            </div>
            <div className="feedImg">
              <img src="/images/kangjimin/cat1.jpg" alt="" />
            </div>
            <div className="icons">
              <img
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
                alt=""
              />
              <img
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/comment.png"
                alt=""
              />
              <img
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/share.png"
                alt=""
              />
              <img
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/bookmark.png"
                alt=""
              />
            </div>

            <div className="text">
              <p className="like">
                <img
                  className="profile"
                  src="/images/kangjimin/cat3.jpg"
                  alt=""
                />
                <span className="bold">jmmmmmmmm</span>님&nbsp;
                <span className="bold">여러 명</span>이 좋아합니다
              </p>
              <p>
                <span className="id">mingming</span>고양이 사진보며 힐링...
                <span className="view">더 보기</span>
              </p>
              <ul className="comments">
                <li>
                  <span className="id">neceosecius</span>
                  <p>거봐 좋았잖아~~~~</p>
                  <img
                    src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
                    alt=""
                  />
                </li>
                <CommentList commentArray={commentArray} />
              </ul>
              <p>42분 전</p>
            </div>

            <form className="comment-box" onSumbit={submitComment}>
              <input
                type="text"
                placeholder="댓글 달기..."
                value={commentValue}
                onChange={event => setCommentValue(event.target.value)}
              />
              <button
                className={activeSubmit ? 'activeSub' : 'nonActiveSub'}
                disabled={!activeSubmit}
                onClick={submitComment}
              >
                게시
              </button>
            </form>
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
            <p>
              Instagram 정보 · 지원 · 홍보 센터 · API · 채용 정보 ·
              개인정보처리방침 · 약관 · 디렉터리 · 프로필 · 해시태그 · 언어
            </p>
            <p>© 2019 INSTAGRAM</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default JmMain;
