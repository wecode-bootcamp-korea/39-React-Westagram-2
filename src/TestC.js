import { useState } from "react"
import { Value } from "sass"

구조분해할당 

값이 변하는 거 쓸때는 기본적으로 onchange
useState('')
const [commentList, setcommentList] = useState([]);
const active = commentInput.length > 5;

버튼을 클릭하면(핸들클릭) >
핸들클릭 함수가 실행

// setCommentList([...commentList])

const handleClick = () => {
commentList.push(commentInput);
const pushedComment = [...commentList, commentInput];
setCommentList(pushedComments)
}

렌더링 되는 기준이 스태이트가 변경되는 시점


스프레드
배열을 풀어서 넣어야 함 스프레드오퍼레이터 >> ...

Value = {commentInput}
onchange={saveCommentInput}


.saveCommentInput
<div>
  {comment}
  </div>


{commentList.map((comment, index) = {
  return <div~>
  
  {comment}
  
  </>;
})}



