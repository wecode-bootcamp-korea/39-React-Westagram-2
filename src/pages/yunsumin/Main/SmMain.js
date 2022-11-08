import './SmMain.scss';
import { ASIDE_LIST } from './AsideObjact';
// 댓글 컴포넌트를 import
import { FeedComment } from './Comment';
// useState를 react로 부터 import
import React, { useState } from 'react';

function SmMain() {
  //댓글 input창의 값을 저장할 state를 컴포넌트 최상단에 선언
  const [commentValue, setCommentValue] = useState('');
  // 댓글로 입력한 값을 배열에 저장해줄 빈배열
  const [commentList] = useState([]);
  // 이벤트를 인자로 받고 event.target.value를 setCommentValue에 저장해줄 함수
  const saveCommentValue = event => {
    setCommentValue(event.target.value);
  };

  const activate = commentValue.length > 0; //댓글창의 값이 0보다 크다면 true를 작다면 false를 반환하는 조건식을 변수로 선언
  // 댓글로 입력한 값을 commentList State의 빈배열에 추가해주고, 댓글 입력창에 입력한 값을 초기화 해주는 함수
  const post = () => {
    commentList.push(commentValue);
    setCommentValue('');
    console.log(commentList);
  };

  return (
    <div className="mainPage">
      <div className="navcant">
        <div className="logo item">
          <h1>Westagram</h1>
        </div>
        <div className="inputBar item">
          <input className="inputA clickEv" type="text" placeholder="검색" />
          <svg
            className="origsvg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z" />
          </svg>
        </div>
        <div className="icons item">
          <li>
            <a href="#!">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
              </svg>
            </a>
            <a href="#!">
              <img
                alt="메신저"
                className="messgeIcon"
                src="/images/yunsumin/message.png"
              />
            </a>
            <a href="#!">
              <img alt="포스팅" src="/images/yunsumin/addPost.png" />
            </a>
            <a href="#!">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M306.7 325.1L162.4 380.6C142.1 388.1 123.9 369 131.4 349.6L186.9 205.3C190.1 196.8 196.8 190.1 205.3 186.9L349.6 131.4C369 123.9 388.1 142.1 380.6 162.4L325.1 306.7C321.9 315.2 315.2 321.9 306.7 325.1V325.1zM255.1 224C238.3 224 223.1 238.3 223.1 256C223.1 273.7 238.3 288 255.1 288C273.7 288 288 273.7 288 256C288 238.3 273.7 224 255.1 224V224zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z" />
              </svg>
            </a>
            <a href="#!">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z" />
              </svg>
            </a>
            <div className="plopBody">
              <a href="#!" className="plop">
                <img alt="내사진" src="/images/yunsumin/my.jpg" />
              </a>
            </div>
          </li>
        </div>
      </div>
      <section>
        <div className="section">
          <div className="firstSection">
            <div className="story">
              <div className="plofile">
                <div className="gradation">
                  <div className="storyItem plofile1 obj">
                    <img
                      alt="강이지1"
                      className="storyImg"
                      src="/images/yunsumin/dog1.jpg"
                    />
                  </div>
                </div>
                <div className="gradation">
                  <div className="storyItem plofile2 obj">
                    <img
                      alt="강아지2"
                      className="storyImg"
                      src="/images/yunsumin/dog2.jpg "
                    />
                  </div>
                </div>
                <div className="gradation">
                  <div className="storyItem plofile3 obj">
                    <img
                      alt="강아지3"
                      className="storyImg"
                      src="/images/yunsumin/dog3.jpg "
                    />
                  </div>
                </div>
                <div className="gradation">
                  <div className="storyItem plofile4 obj">
                    <img
                      alt="강아지4"
                      className="storyImg"
                      src="/images/yunsumin/dog4.jpg "
                    />
                  </div>
                </div>
                <div className="gradation">
                  <div className="storyItem plofile5 obj">
                    <img
                      alt="강아지5"
                      className="storyImg"
                      src="/images/yunsumin/dog5.jpg "
                    />
                  </div>
                </div>
                <div className="gradation">
                  <div className="storyItem plofile6 obj">
                    <img
                      alt="강이지6"
                      className="storyImg"
                      src="/images/yunsumin/dog6.jpg "
                    />
                  </div>
                </div>
              </div>
              <div className="userName">
                <p>console_0</p>
                <p>return_07</p>
                <p>wecode_S_</p>
                <p>fontS_9</p>
                <p>flex_12</p>
                <p>dhrtntn77</p>
              </div>
            </div>
            <div className="feeds">
              <div className="firstFeeds">
                <div className="feedsHearder">
                  <div className="feedsGradation">
                    <img
                      alt="강아지1"
                      className="feed1Img"
                      src="/images/yunsumin/dog1.jpg"
                    />
                  </div>
                  <div className="feedName">
                    <span>console_0</span>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M120 256c0 30.9-25.1 56-56 56s-56-25.1-56-56s25.1-56 56-56s56 25.1 56 56zm160 0c0 30.9-25.1 56-56 56s-56-25.1-56-56s25.1-56 56-56s56 25.1 56 56zm104 56c-30.9 0-56-25.1-56-56s25.1-56 56-56s56 25.1 56 56s-25.1 56-56 56z" />
                  </svg>
                </div>
                <div className="feeds1Photo">
                  <img
                    alt="사진1"
                    className="photo1"
                    src="/images/yunsumin/dog_pohto_1.jpg"
                  />
                </div>
                <div className="commentBox">
                  <div className="lickBar">
                    <div>
                      <button type="button" className="hartButton">
                        <svg
                          className="hart"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path d="M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z" />
                        </svg>
                      </button>
                      <svg
                        className="comment"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path d="M256 32C114.6 32 .0272 125.1 .0272 240c0 47.63 19.91 91.25 52.91 126.2c-14.88 39.5-45.87 72.88-46.37 73.25c-6.625 7-8.375 17.25-4.625 26C5.818 474.2 14.38 480 24 480c61.5 0 109.1-25.75 139.1-46.25C191.1 442.8 223.3 448 256 448c141.4 0 255.1-93.13 255.1-208S397.4 32 256 32zM256.1 400c-26.75 0-53.12-4.125-78.38-12.12l-22.75-7.125l-19.5 13.75c-14.25 10.12-33.88 21.38-57.5 29c7.375-12.12 14.37-25.75 19.88-40.25l10.62-28l-20.62-21.87C69.82 314.1 48.07 282.2 48.07 240c0-88.25 93.25-160 208-160s208 71.75 208 160S370.8 400 256.1 400z" />
                      </svg>
                      <img
                        alt="메신저 아이콘"
                        src="/images/yunsumin/message.png"
                      />
                    </div>
                    <div>
                      <img
                        alt="북마크 아이콘"
                        src="/images/yunsumin/bookmark.png"
                      />
                    </div>
                  </div>
                  <div className="lickView">
                    <div className="viewImgDiv">
                      <img
                        alt="강아지1 이미지"
                        src="/images/yunsumin/dog1.jpg"
                      />
                    </div>
                    <p>console_0님 외</p>
                    <b className="lieckr">1023명</b>
                    <p>이 좋아합니다</p>
                  </div>
                  <div className="title">
                    console_0<span>뚱이 남친짤</span>
                  </div>
                  <div className="comments">
                    <a href="#!">댓글 1102개 모두 보기</a>
                  </div>
                  <FeedComment
                    /*댓글 컴포넌트가입력될 곳, 댓글 컴포넌트에서 사용할 입력한 값이 배열로저장되어 있는 commentList State를 porps로 자식요소에게 전달 */
                    commentList={commentList}
                  />
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
                        value={commentValue}
                        //input창의 값이 변경될때마다 지정한 함수가 실행되는 이벤트 핸들러
                        onChange={saveCommentValue}
                      />
                      <button
                        // 위에서 선언한 조건식변수의 값이 ture라면 disabled의 값을 false로 그게 아니라면 true로 변경해줌
                        disabled={!activate}
                        className="commentButton1"
                        type="submit"
                        onClick={post}
                      >
                        <h1 className={activate ? 'posting2' : 'posting1'}>
                          게시
                        </h1>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="secondSection">
            <div className="plusFarow">
              <div className="farowPohtoBody">
                <div>
                  <img
                    alt="내사진 이미지"
                    className="farowPohto"
                    src="/images/yunsumin/my.jpg"
                  />
                </div>
              </div>
              <div className="farowText">
                <b>yunsumin725</b>
                <p>윤수민</p>
              </div>
              <div className="farowButton">
                <a href="#!">
                  <b>전환</b>
                </a>
              </div>
            </div>
            <div className="suggestion">
              <b>회원님을 위한 추천</b>
              <a href="#!">
                <b>모두보기</b>
              </a>
            </div>
            <div className="mor">
              <div className="aa">
                <img
                  alt="고양이1 이미지"
                  className="catImg"
                  src="/images/yunsumin/cat_1.jpg"
                />
              </div>
              <div className="dheText">
                <b>milk_1_5</b>
                <p>o._.un님 외 1명이 팔로우합니다</p>
              </div>
              <a href="#!">
                <b className="follow">팔로우</b>
              </a>
            </div>
            <div className="mor">
              <div className="aa">
                <img
                  alt="고양이2 이미지"
                  className="catImg"
                  src="/images/yunsumin/cat_2.jpg"
                />
              </div>
              <div className="dheText">
                <b>bread_07_25</b>
                <p>회원님을 팔로우합니다</p>
              </div>
              <a href="#!">
                <b className="follow">팔로우</b>
              </a>
            </div>
            <div className="mor">
              <div className="aa">
                <img
                  alt="고양이3 이미지"
                  className="catImg"
                  src="/images/yunsumin/cat_3.jpg"
                />
              </div>
              <div className="dheText">
                <b>ra_ra_5</b>
                <p>dong._.dol2님 외 16명이 팔로우합니다</p>
              </div>
              <a href="#!">
                <b className="follow">팔로우</b>
              </a>
            </div>
            <div className="mor">
              <div className="aa">
                <img
                  alt="고양이4 이미지"
                  className="catImg"
                  src="/images/yunsumin/cat_4.jpg"
                />
              </div>
              <div className="dheText">
                <b>mong_mong_112</b>
                <p>zlmlnl_3l9님 외 8명이 팔로우합니다</p>
              </div>
              <a href="#!">
                <b className="follow">팔로우</b>
              </a>
            </div>
            <div className="mor">
              <div className="aa">
                <img
                  alt="고양이5 이미지"
                  className="catImg"
                  src="/images/yunsumin/cat_5.jpg"
                />
              </div>
              <div className="dheText">
                <b>nico_1234</b>
                <p>icac_xx님 외 7명이 팔로우합니다</p>
              </div>
              <a href="#!">
                <b className="follow">팔로우</b>
              </a>
            </div>
            <ul className="asideBar">
              {ASIDE_LIST.map(asideList => (
                <li key={asideList.id}>{asideList.text}</li>
              ))}
            </ul>
            <div className="end2">© 2022 WESTAGRAM FROM META</div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SmMain;
