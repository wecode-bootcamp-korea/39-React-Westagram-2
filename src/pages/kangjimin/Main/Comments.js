import React from 'react';

function CommentList(props) {
  return props.commentArray.map((comment, index) => (
    <li className="comments" key={index}>
      <span className="id">lululu</span>
      <p>{comment}</p>
      <img
        src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
        alt=""
      />
    </li>
  ));
}

export default CommentList;
