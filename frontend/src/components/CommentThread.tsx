import React, { useEffect, useState } from 'react';
import { CommentType } from '../types/CommentType';
import { commentsApi } from '../api/comments';

interface Props {
  comment: CommentType;
  level?: number;
}

export const CommentThread: React.FC<Props> = ({ comment, level = 0 }) => {
  const [commentsChildren, setCommentsChildren] = useState<CommentType[]>([]);

  useEffect(() => {
    setCommentsChildren(commentsApi.loadCommentsByParentId(comment.id));
  }, [comment.id]);

  return (
    <div className={`CommentThread CommentThread__level-${level}`}>
      <div className="Comment">
        <div className="Comment__header">
          <img
            className="Comment__avatar"
            src={`https://avatars.dicebear.com/api/human/${comment.id}.svg`}
            alt=""
          />

          <span className="Comment__authorName">
            Anonym
          </span>

          <span className="Comment__date">
            {new Date(comment.createdAt).toLocaleString()}
          </span>
        </div>

        <p className="Comment__body">
          {comment.text}
        </p>
      </div>

      {commentsChildren.length > 0 && (
        <div className="CommentsChildren">
          {commentsChildren.map((childComment) => (
            <CommentThread
              comment={childComment}
              level={level + 1}
              key={childComment.id}
            />
          ))}
        </div>
      )}
    </div>
  );
};
