import React from 'react';
import { useState } from 'react';
import CommentList from './Comments';

const Feed = props => {
  const { feed } = props;
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
    <div>
      <div className="user">
        <img className="profile" src={feed.profile} alt="" />
        <span className="id">{feed.feedId}</span>
        <img
          src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/more.png"
          alt=""
        />
      </div>
      <div className="feedImg">
        <img src={feed.feedImg} alt="" />
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
          <img className="profile" src={feed.likeProfile} alt="" />
          <span className="bold">jmmmmmmmm</span>님&nbsp;
          <span className="bold">여러 명</span>이 좋아합니다
        </p>
        <p>
          <span className="id">mingming</span>
          {feed.feedText}
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
    </div>
  );
};

export default Feed;
