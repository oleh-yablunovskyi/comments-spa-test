/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import './App.scss';
import { CommentsList } from './components/CommentsList/CommentsList';
import { commentsApi } from './api/comments';
import { CommentType } from './types/CommentType';
import { CommentForm } from './components/CommentForm/CommentForm';

export const App: React.FC = () => {
  const [topComments, setTopComments] = useState<CommentType[]>([]);

  const loadTopComments = async () => {
    try {
      const loadedComments = await commentsApi.getTopComments();

      console.log(loadedComments);

      setTopComments(loadedComments);
    } catch (error) {
      console.error('Error loading top comments:', error);
    }
  };

  useEffect(() => {
    loadTopComments();
  }, []);

  return (
    <div className="container">
      <div className="App">
        <h1 className="App__title">Comments</h1>

        <div className="App__main">
          <CommentsList topComments={topComments} />
        </div>

        <div className="App__bottom">
          <CommentForm />
        </div>
      </div>
    </div>
  );
};
