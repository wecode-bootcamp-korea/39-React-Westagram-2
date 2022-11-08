//props를 인자로 받는 FeedComment 컴포넌트를 export
export const FeedComment = props => {
  //props를통해 댓글이 저장된 배열(commentList)을 props로 받고 map함수를 사용하여 댓글을 출력
  return props.commentList.map((comment, index) => (
    <div className="commentMain" key={index}>
      <p className="usersName">
        yunsumin725
        <span className="usersComment">{comment}</span>
      </p>
      <img
        className="commentHeart"
        alt="작은 하트"
        src="/images/yunsumin/miniblack_heart.png"
      />
    </div>
  ));
};
