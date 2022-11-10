import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCompass,
  faHeart,
  faUser,
} from '@fortawesome/free-regular-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

import './Main.scss';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

export default function SyMain() {
  const [comments, setComments] = useState({
    newId: 0,
    newComment: '',
    commentList: [],
  });

  const { newId, newComment, commentList } = comments;

  function addComment(event) {
    event.preventDefault();
    setComments({
      newId: newId + 1,
      newComment: '',
      commentList: [...commentList, { id: newId, text: newComment }],
    });
  }

  function inputComment(event) {
    setComments({
      ...comments,
      newComment: event.target.value,
    });
  }

  return (
    <div className="container">
      <nav className="nav">
        <div className="nav__logo">
          <div className="nav__icon">
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </div>
          <div className="nav__text">Westagram</div>
        </div>
        <div className="nav__search">
          <input className="nav__search__input" placeholder="검색" />
        </div>
        <div className="nav__side-icons">
          <FontAwesomeIcon className="icons" icon={faCompass} size="lg" />
          <FontAwesomeIcon className="icons" icon={faHeart} size="lg" />
          <FontAwesomeIcon className="icons" icon={faUser} size="lg" />
        </div>
      </nav>

      <main className="main">
        <div className="main__feeds">
          <article className="main__stories">
            <div>
              <img
                className="profile-pic"
                alt="main-pic"
                src="/images/leesangyoon/my-profile.jpeg"
                width="50"
              />
              <span>sangyoonlee1231</span>
            </div>
          </article>

          <article className="main__article">
            <div className="main__article__header">
              <div className="main__article__header__profile">
                <img
                  className="profile-pic"
                  alt="main-pic"
                  src="/images/leesangyoon/my-profile.jpeg"
                  width="40px"
                />
              </div>
              <div className="main__article__header__nickname">
                sangyoonlee1231
              </div>
              <div className="main__article__header__more" />
            </div>

            <div className="main__article__media">
              <img
                id="media"
                alt="main-pic"
                src="/images/leesangyoon/article-pic.jpeg"
              />
            </div>

            <div className="main__article__reaction">
              <i className="reaction-icons far fa-heart fa-lg" />
              <img
                className="reaction-icons"
                alt="comment"
                src="/images/leesangyoon/icons/comment.png"
                width="23"
              />
              <img
                className="reaction-icons"
                alt="message"
                src="/images/leesangyoon/icons/message.png"
                width="23"
              />
              <img
                id="reaction-bookmark-icon"
                alt="message"
                src="/images/leesangyoon/icons/bookmark.png"
                width="28"
              />
            </div>

            <div className="main__article__comment">
              <div className="how-many-likes">
                <span>
                  좋아요 <span>999</span>명
                </span>
              </div>
              <div className="comment-list">
                <ul>
                  {commentList.map(comment => (
                    <Comment
                      key={comment.id}
                      commentID={comment.id}
                      commentValue={comment.value}
                    />
                  ))}
                </ul>
              </div>
            </div>

            <div className="main__article__comment-input">
              <div className="smile-icon">
                <img
                  id="smile"
                  alt="smile"
                  src="/images/leesangyoon/icons/smile.png"
                />
              </div>
              <div className="comment-form">
                <form onSubmit={event => addComment(event)}>
                  <input
                    onInput={event => inputComment(event)}
                    type="text"
                    placeholder="댓글 달기..."
                  />
                  <button>게시</button>
                </form>
              </div>
            </div>
          </article>
        </div>

        <div className="main__right">
          <article className="main__right__profile">
            <div className="main__right__profile__pic">
              <img
                alt="profile-right"
                src="/images/leesangyoon/my-profile.jpeg"
                width="50"
              />
            </div>
            <div className="main__right__profile__name">
              <div className="profile-id">sangyoonlee1231</div>
              <div className="profile-name">SangYoon Lee</div>
            </div>
            <div className="main__right__profile__change-btn">
              <button>전환</button>
            </div>
          </article>

          <article className="main__right__suggestions">
            <div className="main__right__suggestions__title">
              <span>회원님을 위한 추천</span>
              <span>모두 보기</span>
            </div>
            <div className="main__right__suggeestions__list" />
          </article>
        </div>
      </main>
    </div>
  );
}

function Comment({ commentID, commentValue }) {
  return (
    <li id={commentID}>
      <span>
        <span className="bold">{commentID}</span>
        {commentValue}
      </span>
      &nbsp;
      <FontAwesomeIcon
        className="comment-icon fas fa-times"
        icon={faTimes}
        size="lg"
      />
      <FontAwesomeIcon
        className="comment-icon fas fa-times"
        icon={faHeart}
        size="lg"
      />
    </li>
  );
}
