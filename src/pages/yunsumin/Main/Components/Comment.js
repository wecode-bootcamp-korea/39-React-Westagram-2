import { useState } from 'react';

const FeedComment = props => {
  const { value, deleteComment } = props;
  const [heart, setHeart] = useState(false);

  const heartChange = () => {
    if (heart == false) {
      setHeart(true);
    } else {
      setHeart(false);
    }
  };

  return (
    <div className="commentMain">
      <p className="usersName">
        yunsumin725
        <span className="usersComment">{value}</span>
      </p>
      <div className="commentIcons">
        <img
          className={heart ? 'commentHeartBlack' : 'commentHeart'}
          alt="작은 하트"
          src={
            heart
              ? '/images/yunsumin/mini_heart.png'
              : '/images/yunsumin/miniblack_heart.png'
          }
          onClick={heartChange}
        />
        <button className="xButton">
          <i className="far fa-trash-alt fa-lg" onClick={deleteComment} />
        </button>
      </div>
    </div>
  );
};

export default FeedComment;
