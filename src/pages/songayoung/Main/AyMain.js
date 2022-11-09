import React from 'react';
import { Link } from 'react-router-dom';
import { FOOTER_INFO } from './footer';

export default function AyMain() {
  return (
    <>
      <header>
        <nav>
          <Link to="/AyMain">
            <img
              className="logo"
              src="/images/songayoung/instagram.png"
              alt="instagram_logo"
            />
          </Link>
          <Link className="logoText" to="/Ayoung">
            Westagram
          </Link>
          <input className="topSearch" type="text" placeholder="검색" />
          <img
            className="icon_explore"
            src="/images/songayoung/explore.png"
            alt="instagram_logo"
          />
          <img
            className="icon_favorite"
            src="/images/songayoung/heart.png"
            alt="instagram_logo"
          />
          <img
            className="icon_profile"
            src="/images/songayoung/profile.png"
            alt="instagram_logo"
          />
        </nav>
      </header>

      <section className="main">
        <div className="feeds">
          <div className="article">
            <div className="feed-top">
              <div className="storyColor">
                <img
                  className="profile-img"
                  src="/images/songayoung/profile_img_00.png"
                  alt="profile-img"
                />
              </div>
              <div className="user">
                <h3 className="user-name">s_box_x</h3>
                <h4 className="user-info">위코드 선릉 2호점</h4>
              </div>
              <img
                className="more-icon"
                src="/images/songayoung/more.png"
                alt="more-icon"
              />
            </div>

            <img
              className="feed-img"
              src="/images/songayoung/feed_img.jpg"
              alt="feed-img"
            />
            <div className="feed-icons">
              <img
                className="heart-icon"
                src="/images/songayoung/heart.png"
                alt="heart-icon"
              />
              <img
                className="chat-icon"
                src="/images/songayoung/comment.png"
                alt="chat-icon"
              />
              <img
                className="message-icon"
                src="/images/songayoung/message.png"
                alt="message-icon"
              />
              <img
                className="bookmark-icon"
                src="/images/songayoung/bookmark.png"
                alt="bookmark-icon"
              />
            </div>
            <div className="like">
              <img src="/images/songayoung/profile_img_00.png" alt="like-img" />

              <h3>wecode</h3>
              <h4>님</h4>
              <h3 className="likeNum">외 32명</h3>
              <h4>이 좋아합니다</h4>
            </div>

            <div className="feed-bottom">
              <div className="feed-info">
                <h3 className="user-name">wecode</h3>
                <h4 className="feed-text">베이커리~</h4>
              </div>
              <h5 className="feed-time">41분전</h5>
            </div>

            <div className="commentInput">
              <input
                className="comment-input"
                type="text"
                placeholder="댓글 달기..."
              />
              <button className="comment-btn">게시</button>
            </div>
          </div>
        </div>

        <div className="main-right">
          <div className="right-top">
            <div className="storyColor">
              <img src="/images/songayoung/profile_img_00.png" alt="myImg" />
            </div>
            <div className="user">
              <h3 className="myName">s_box_x</h3>
              <h3 className="myInfo">애옹</h3>
            </div>
          </div>

          <div className="right-mid">
            <div className="mid-nav">
              <div>스토리</div>
              <div>모두보기</div>
            </div>
            <ul>
              <li>
                <div className="storyColor">
                  <img
                    src="/images/songayoung/profile_img_06.jpeg"
                    alt="story_img"
                  />
                </div>
                <div>
                  <h3>code_who</h3>
                  <h5>16분 전</h5>
                </div>
              </li>
              <li>
                <div className="storyColor">
                  <img src="/images/songayoung/hoduuu.jpg" alt="story_img" />
                </div>
                <div>
                  <h3>hoduu_u</h3>
                  <h5>3시간 전</h5>
                </div>
              </li>
              <li>
                <div className="storyColor">
                  <img
                    src="/images/songayoung/profile_img_05.jpg"
                    alt="story_img"
                  />
                </div>
                <div>
                  <h3>rave_eee</h3>
                  <h5>5시간 전</h5>
                </div>
              </li>
              <li>
                <div className="storyColor">
                  <img
                    src="/images/songayoung/profile_img_04.jpg"
                    alt="story_img"
                  />
                </div>
                <div>
                  <h3>choooo123</h3>
                  <h5>20시간 전</h5>
                </div>
              </li>
            </ul>
          </div>

          <div className="right-bottom">
            <div className="bottom-nav">
              <div>회원님을 위한 추천</div>
              <div>모두보기</div>
            </div>
            <ul>
              <li>
                <div className="storyColor" />
                <img
                  src="/images/songayoung/profile_img_07.jpg"
                  alt="story_img"
                />
                <div>
                  <h3>anjdy_9</h3>
                  <h5>wecode님 외 2명이 함께 알고있습니다.</h5>
                  <h4>팔로우</h4>
                </div>
              </li>
              <li>
                <img
                  src="/images/songayoung/profile_img_03.jpg"
                  alt="story_img"
                />
                <div>
                  <h3>mongmong</h3>
                  <h5>milk님 외 1명이 함께 알고있습니다.</h5>
                  <h4>팔로우</h4>
                </div>
              </li>
              <li>
                <img
                  src="/images/songayoung/profile_img_02.jpg"
                  alt="story_img"
                />
                <div>
                  <h3>king_pon</h3>
                  <h5>wecode님 외 3명이 함께 알고있습니다.</h5>
                  <h4>팔로우</h4>
                </div>
              </li>
              <li>
                <img
                  src="/images/songayoung/profile_img_01.jpg"
                  alt="story_img"
                />
                <div>
                  <h3>nanananan999</h3>
                  <h5>wecode님 외 9명이 함께 알고있습니다.</h5>
                  <h4>팔로우</h4>
                </div>
              </li>
            </ul>
          </div>
          <footer className="footer">
            <ul>
              {FOOTER_INFO.map(info => (
                <li className="footer-list" key={info.id}>
                  <a href="/">{info.text}</a>
                </li>
              ))}
            </ul>
            <h3>2022 westagram from SAY</h3>
            <Link to="/songayoung/login">·Logout·</Link>
          </footer>
        </div>
      </section>
    </>
  );
}
