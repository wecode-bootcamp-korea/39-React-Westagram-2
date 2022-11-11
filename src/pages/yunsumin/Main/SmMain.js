import './SmMain.scss';
import { ASIDE_LIST } from './Components/AsideObjact';

import Feed from './Components/Feed';

import React, { useState } from 'react';

import { useEffect } from 'react';

function SmMain() {
  const [feedList, setFeedList] = useState([]);

  useEffect(() => {
    fetch('/data/Feed.json', { method: 'GET' })
      .then(response => response.json())
      .then(data => {
        setFeedList(data);
      });
  }, []);
  console.log(localStorage.getItem('token'));
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
              {feedList.map(feed => (
                <Feed key={feed.id} feed={feed} />
              ))}
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
                <li key={asideList.id}>
                  <a href={asideList.link}>{asideList.text}</a>
                </li>
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
