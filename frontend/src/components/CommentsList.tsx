import React from 'react';
import { CommentType } from '../types/CommentType';
import { Comment } from './Comment';

interface Props {
  topComments: CommentType[];
}

export const CommentsList: React.FC<Props> = React.memo(({ topComments: comments }) => {
  return (
    <div className="CommentsList">
      {comments.map((topComment) => (
        <Comment
          comment={topComment}
          level={1}
          key={topComment.id}
        />
      ))}
    </div>
  );
});
