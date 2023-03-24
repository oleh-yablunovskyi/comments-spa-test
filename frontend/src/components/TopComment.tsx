/* eslint-disable max-len */
/* eslint-disable no-console */
import React, { FC, useEffect, useState } from 'react';
import { CommentType } from '../types/CommentType';
import { commentsApi } from '../api/comments';
import { SubComment } from './SubComment';

interface Props {
  comment: CommentType;
}

export const TopComment: FC<Props> = React.memo(({ comment }) => {
  const [subComments, setSubComments] = useState<CommentType[]>([]);

  useEffect(() => {
    setSubComments(commentsApi.loadCommentsByParentId(comment.id));
  }, []);

  console.log(subComments);

  return (
    <>
      <tr>
        <td>
          <div className="Comment">
            <div className="Comment__header">
              <img
                className="Comment__avatar"
                src={`https://avatars.dicebear.com/api/human/${comment.id}.svg`}
                alt=""
              />

              <span className="Comment__author_name">
                Anonym
              </span>

              <span className="Comment__date">
                22.05.22 at 22:30
              </span>
            </div>

            <p className="Comment__text">
              {comment.text}
            </p>
          </div>
        </td>
      </tr>

      {subComments.length > 0 && (
        <SubComment comments={subComments} index={1} />
      )}
    </>
  );
});
