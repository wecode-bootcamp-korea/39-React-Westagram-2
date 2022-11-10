import React, { useState } from 'react';

export default function HwMain() {
  const [commentInput, setCommentInput] = useState('');
  const [commentList, setCommentList] = useState([]);

  const saveCommntInput = event => {
    setCommentInput(event.target.value);
  };

  const handleClickBtn = () => {
    setCommentList([...commentList, commentInput]);
  };

  return (
    <div class="container">
      <div class="nav_container">
        <div class="nav_left">
          <i class="fab fa-instagram" />
          <div class="bar">|</div>
          <div class="instagram-logo">westagram</div>
        </div>

        <div class="search-container">
          <div class="search-bar">
            <i class="fas fa-search" />
            <input class="search-bar__input" type="search" placeholder="검색" />
          </div>
        </div>

        <div class="nav_right">
          <i class="far fa-compass fa-lg" />
          <i class="far fa-heart nav__icon fa-lg">
            <span class="heart_notification" />
          </i>
          <i class="far fa-user fa-lg" />
        </div>
      </div>

      <section class="main_section">
        <div class="section_1">
          <div class="user">
            <img class="user__id__img" src="images/leehyewon/sample.png" />
            <p class="user__id">hyewon17</p>
          </div>
          <img class="friends__img" src="img/friends.jpeg" />

          <div class="bottombox">
            <div class="bottombox__icons">
              <div class="bottombox__icons__left">
                <i class="far fa-heart fa-lg" />
                <i class="far fa-comment fa-lg" />
                <i class="fa-regular fa-share-from-square fa-lg" />
              </div>
              <div class="bottombox__icons__right">
                <i class="far fa-bookmark fa-lg" />
              </div>
            </div>
            <div class="bottombox__likes">
              <div class="bottombox__likes__first">
                <img class="juyoung__img" src="img/juyoung.jpeg" />
                <p class="bottombox__likes__second">Liked by</p>
                <p class="bottombox__likes__id">juyoung22</p>
                <p class="bottombox__likes__thrid">and</p>
                <p class="bottombox__likes__fourth">300 others</p>
              </div>
              <div class="contents">
                <div class="contents__id">juyoung22</div>
                <div class="contents__content">girls night</div>
              </div>
              <div class="comments">
                {commentList.map((comment, index) => (
                  <div key={index}>
                    <div className="comment" class="comments__id">
                      jieun6
                    </div>
                    <div class="comments__content">{comment}</div>
                  </div>
                ))}
              </div>
              <div class="time">1 HOUR AGO</div>
              <ul class="comments__list" />

              <div class="write">
                <div class="inner">
                  <i class="fa-regular fa-face-smile" />

                  <div class="comment__form">
                    <input
                      onChange={saveCommntInput}
                      class="write__input"
                      placeholder="Add a comment..."
                    />
                    <button class="post" onClick={handleClickBtn}>
                      post
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="section_2">
          <div class="my__id__box">
            <img class="my__id" src="img/jieun.jpeg" />
            <p class="my__id__name">jieun6</p>
          </div>
          <div class="story__box">
            <div class="story__box__top">
              <p class="story">story</p>
              <p class="story__see__all">See All</p>
            </div>

            <div class="story__profile">
              <div class="namhee__box">
                <div class="namhee__border">
                  <img class="namhee" src="img/namhee.jpeg" />
                </div>
                <div class="namhee__border__info">
                  <p class="namhee__border__id">namhee_5</p>
                  <p class="namhee__suggested__for__you">suggested for you</p>
                </div>
                <div class="namhee__follow">Follow</div>
              </div>
              <div class="gain__box">
                <div class="gain__border">
                  <img class="gain" src="img/gain.jpeg" />
                </div>
                <div class="gain__border__info">
                  <p class="gain__border__id">kimgain</p>
                  <p class="gain__suggested__for__you">suggested for you</p>
                </div>
                <div class="gain__follow">Follow</div>
              </div>

              <div class="busan__box">
                <div class="busan__border">
                  <img class="busan" src="img/busan.jpeg" />
                </div>
                <div class="busan__border__info">
                  <p class="busan__border__id">busan</p>
                  <p class="busan__suggested__for__you">suggested for you</p>
                </div>
                <div class="busan__follow">Follow</div>
              </div>
            </div>
          </div>
          <div class="suggestions__box">
            <div class="suggestions__box__top">
              <p class="for__you">suggestions For You</p>
              <p class="suggestions__see__all">See All</p>
            </div>
          </div>

          <p class="info">About·Help·Press·API·Jobs·Privacy·Terms·</p>
          <p class="info2">Location·Language</p>

          <p class="copyright">ⓒ 2022 INSTAGRAM FROM META</p>
        </div>
      </section>
    </div>
  );
}
