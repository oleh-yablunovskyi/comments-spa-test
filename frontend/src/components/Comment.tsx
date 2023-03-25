import React, { useEffect, useState } from 'react';
import { CommentType } from '../types/CommentType';
import { commentsApi } from '../api/comments';

interface Props {
  comment: CommentType;
  level: number;
}

export const Comment: React.FC<Props> = ({ comment, level }) => {
  const [commentsChildren, setCommentsChildren] = useState<CommentType[]>([]);

  useEffect(() => {
    setCommentsChildren(commentsApi.loadCommentsByParentId(comment.id));
  }, [comment.id]);

  return (
    <>
      <div className={`Comment Comment--level-${level}`}>
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

      <>
        {commentsChildren.length > 0 && (
          <>
            {commentsChildren.map((childComment) => (
              <Comment
                comment={childComment}
                level={level < 10 ? level + 1 : level}
                key={childComment.id}
              />
            ))}
          </>
        )}
      </>
    </>
  );
};
