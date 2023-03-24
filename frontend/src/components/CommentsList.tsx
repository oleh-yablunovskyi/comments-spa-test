import React from 'react';
import { CommentType } from '../types/CommentType';
import { CommentThread } from './CommentThread';

interface Props {
  comments: CommentType[];
}

export const CommentsList: React.FC<Props> = React.memo(({ comments }) => {
  return (
    <div className="CommentsList">
      {comments.map((comment) => (
        <CommentThread comment={comment} key={comment.id} />
      ))}
    </div>
  );
});
