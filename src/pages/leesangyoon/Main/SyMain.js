import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCompass,
  faHeart,
  faUser,
} from '@fortawesome/free-regular-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import './Main.scss';

// /* 댓글 기능 구현 */
// const USERNAME = "sangyoonlee";

// const commentForm = document.querySelector(".comment__input form");
// const commentInput = document.querySelector(".comment__input form input");
// const commentList = document.querySelector(".comment-list");

// let commentListArray = [];
// let commentListHTML = [];
// let id = 0;

// let template = `
//   <ul>
//    {{__comment_list__}}
//   </ul>
// `;

// /* 댓글 표시 기능 함수 */
// function showCommentList(commentListArray) {
//   commentListHTML = [];

//   for (let i = 0; i < commentListArray.length; i++) {
//     commentListHTML.push(`
//       <li id=${commentListArray[i][0]}>
//         <span>
//           <span className="bold">${commentListArray[i][1]}</span>
//           ${commentListArray[i][2]}
//         </span>
//         &nbsp;
//         <i className="comment-icon fas fa-times" onclick="deleteComment(event)"></i>
//         <i className="comment-icon far fa-heart"></i>
//       </li>`);
//   }

//   return commentListHTML;
// }

// /* 요소 삭제 기능 함수 */
// function deleteComment(event) {
//   const deleteCommentID = event.target.parentElement.id;

//   commentListArray = commentListArray.filter(
//     (comment) => deleteCommentID != comment[0]
//   );

//   commentListHTML = showCommentList(commentListArray);
//   commentList.innerHTML = template.replace(
//     "{{__comment_list__}}",
//     commentListHTML.join("")
//   );
// }

// /* 댓글 추가 이벤트 리스너 */
// commentForm.addEventListener("submit", (event) => {
//   event.preventDefault();

//   const commentMessage = commentInput.value;

//   if (commentMessage.length === 0) {
//     alert("빈 댓글은 등록하실 수 없습니다.");
//     return;
//   }

//   commentListArray.push([id++, USERNAME, commentMessage]);
//   commentListHTML = showCommentList(commentListArray);
//   commentList.innerHTML = template.replace(
//     "{{__comment_list__}}",
//     commentListHTML.join("")
//   );
// });

export default function SyMain() {
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
              <div className="comment-list" />
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
                <form>
                  <input type="text" placeholder="댓글 달기..." />
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
