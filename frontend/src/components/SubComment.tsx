/* eslint-disable no-console */
import React, { FC } from 'react';
import { CommentType } from '../types/CommentType';

interface Props {
  comments: CommentType[];
  index: number;
}

export const SubComment: FC<Props> = React.memo(({ comments, index }) => {
  const [comment, ...nextComments] = comments;

  console.log({
    index,
    comment,
    nextComments,
  });

  return (
    <>
      <tr>
        <td>
          <div className="Comment" style={{ marginLeft: `${index * 50}px` }}>
            <div className="Comment__header">
              <img
                className="Comment__avatar"
                // src="./icons/avatar-icon.png"
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

      {nextComments.length !== 0 && (
        <SubComment comments={nextComments} index={index + 1} />
      )}
    </>
  );
});
