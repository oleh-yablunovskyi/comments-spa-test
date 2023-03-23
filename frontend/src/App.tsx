/* eslint-disable no-console */
/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import './App.scss';
import { TopComment } from './components/TopComment';
import { commentsApi } from './api/comments';
import { CommentType } from './types/CommentType';

export const App: React.FC = () => {
  const [comments, setComments] = useState<CommentType[]>([]);

  useEffect(() => {
    setComments(commentsApi.loadTopComments());
  }, []);

  console.log(comments);

  return (
    <div className="container">
      <div className="CommentsApp">
        <h1 className="CommentsApp__title">Comments</h1>

        <table className="CommentsTable">
          <tbody>
            {comments.map(comment => (
              <TopComment comment={comment} key={comment.id} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
