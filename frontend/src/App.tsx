import React, { useEffect, useState } from 'react';
import './App.scss';
import { CommentsList } from './components/CommentsList';
import { commentsApi } from './api/comments';
import { CommentType } from './types/CommentType';

export const App: React.FC = () => {
  const [comments, setComments] = useState<CommentType[]>([]);

  useEffect(() => {
    setComments(commentsApi.loadTopComments());
  }, []);

  return (
    <div className="container">
      <div className="App">
        <h1 className="App__title">Comments</h1>

        <CommentsList comments={comments} />
      </div>
    </div>
  );
};
