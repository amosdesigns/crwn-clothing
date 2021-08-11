import React from 'react';
import CommentItem from "../commentitem/comment-item.component"
import "./comment-list.styles.scss";

function CommentList() {
  return (
    <div id="comments">
      
      Reviews
      <CommentItem />
      <CommentItem />
      <CommentItem />
      <CommentItem />
      <CommentItem />
      <CommentItem />
    </div>
  );
}

export default CommentList;
