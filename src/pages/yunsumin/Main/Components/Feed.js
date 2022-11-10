import { useState } from 'react';
import FeedComment from './Comment';

const Feed = props => {
  const { feed } = props;

  //댓글 input창의 값을 저장할 state를 컴포넌트 최상단에 선언
  const [commentValue, setCommentValue] = useState('');
  // 댓글로 입력한 값을 배열에 저장해줄 빈배열
  const [commentList] = useState([]);

  const [feedLick, setFeedLick] = useState(false);

  const saveCommentValue = event => {
    setCommentValue(event.target.value);
  };

  const activate = commentValue.length > 0; //댓글창의 값이 0보다 크다면 true를 작다면 false를 반환하는 조건식을 변수로 선언
  // 댓글로 입력한 값을 commentList State의 빈배열에 추가해주고, 댓글 입력창에 입력한 값을 초기화 해주는 함수
  const post = () => {
    commentList.push(commentValue);
    setCommentValue('');
  };

  const clickLick = () => {
    if (feedLick == false) {
      setFeedLick(true);
    } else {
      setFeedLick(false);
      console.log(feedLick);
    }
  };

  return (
    <div className="firstFeeds">
      <div className="feedsHearder">
        <div className="feedsGradation">
          <img alt="강아지1" className="feed1Img" src={feed.userImg} />
        </div>
        <div className="feedName">
          <span>{feed.userName}</span>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path d="M120 256c0 30.9-25.1 56-56 56s-56-25.1-56-56s25.1-56 56-56s56 25.1 56 56zm160 0c0 30.9-25.1 56-56 56s-56-25.1-56-56s25.1-56 56-56s56 25.1 56 56zm104 56c-30.9 0-56-25.1-56-56s25.1-56 56-56s56 25.1 56 56s-25.1 56-56 56z" />
        </svg>
      </div>
      <div className="feeds1Photo">
        <img alt="사진1" className="photo1" src={feed.userPohto} />
      </div>
      <div className="commentBox">
        <div className="lickBar">
          <div className="commentLickBar">
            <button type="button" className="hartButton" onClick={clickLick}>
              <i
                className={
                  feedLick
                    ? 'fa-solid fa-heart fa-2x'
                    : 'fa-regular fa-heart fa-2x'
                }
              />
            </button>
            <svg
              className="comment"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M256 32C114.6 32 .0272 125.1 .0272 240c0 47.63 19.91 91.25 52.91 126.2c-14.88 39.5-45.87 72.88-46.37 73.25c-6.625 7-8.375 17.25-4.625 26C5.818 474.2 14.38 480 24 480c61.5 0 109.1-25.75 139.1-46.25C191.1 442.8 223.3 448 256 448c141.4 0 255.1-93.13 255.1-208S397.4 32 256 32zM256.1 400c-26.75 0-53.12-4.125-78.38-12.12l-22.75-7.125l-19.5 13.75c-14.25 10.12-33.88 21.38-57.5 29c7.375-12.12 14.37-25.75 19.88-40.25l10.62-28l-20.62-21.87C69.82 314.1 48.07 282.2 48.07 240c0-88.25 93.25-160 208-160s208 71.75 208 160S370.8 400 256.1 400z" />
            </svg>
            <img alt="메신저 아이콘" src="/images/yunsumin/message.png" />
          </div>
          <div>
            <img alt="북마크 아이콘" src="/images/yunsumin/bookmark.png" />
          </div>
        </div>
        <div className="lickView">
          <div className="viewImgDiv">
            <img alt="강아지1 이미지" src="/images/yunsumin/dog1.jpg" />
          </div>
          <p>console_0님 외</p>
          <b className="lieckr">
            {feedLick ? feed.userLick + 1 : feed.userLick}명
          </b>
          <p>이 좋아합니다</p>
        </div>
        <div className="title">
          <p className="titleUserName">
            {feed.userName}
            <span className="titleUserComment">{feed.userComment}</span>
          </p>
        </div>
        <div className="comments">
          <a href="#!">댓글 1102개 모두 보기</a>
        </div>
        {commentList.map((comment, index) => (
          <FeedComment key={index} value={comment} />
        ))}

        <div className="commentBar">
          <img
            alt="스마일 아이콘"
            className="commentImg"
            src="/images/yunsumin/smile.png"
          />
          <form onSubmit={e => e.preventDefault()}>
            <input
              className="commentInput1"
              placeholder="댓글입력..."
              type="text"
              //댓글 input태그의 값을 commentValue State의 값과 동기화
              value={commentValue}
              //input창의 값이 변경될때마다 지정한 함수가 실행되는 이벤트 핸들러
              onChange={saveCommentValue}
            />
            <button
              // 위에서 선언한 조건식변수의 값이 ture라면 disabled의 값을 false로 그게 아니라면 true로 변경해줌
              disabled={!activate}
              className="commentButton1"
              type="submit"
              // 버튼 태그를 클릭시 post함수가 실행되는 이벤트 리스너
              onClick={post}
            >
              <h1 className={activate ? 'posting2' : 'posting1'}>게시</h1>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Feed;
