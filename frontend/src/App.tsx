/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import './App.scss';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import socket from './socket';
import { CommentsList } from './components/CommentsList/CommentsList';
import { CommentForm } from './components/CommentForm/CommentForm';
import { Loader } from './components/Loader/Loader';
import { commentsApi } from './api/comments';
import { CommentType } from './types/CommentType';

export const App: React.FC = () => {
  const [topComments, setTopComments] = useState<CommentType[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const loadTopComments = async () => {
    setIsLoading(true);

    try {
      const comments = await commentsApi.getTopComments();

      console.log('Loaded topComments:', comments);

      setTopComments(comments);
    } catch (error) {
      console.error('Error loading top comments:', error);

      Notify.failure(
        'Error loading top comments. Please try again.',
        { timeout: 5000 },
      );
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadTopComments();

    // Add event listener for real-time updates
    socket.on('new_comment', (newComment: CommentType) => {
      setTopComments((prevComments) => [...prevComments, newComment]);
    });

    return () => {
    // Remove event listener on cleanup
      socket.off('new_comment');
    };
  }, []);

  return (
    <div className="container">
      <div className="App">
        <h1 className="App__title">Comments</h1>

        <div className="App__main">
          {isLoading
            ? (
              <Loader />
            )
            : (
              <CommentsList topComments={topComments} />
            )}
        </div>

        <div className="App__bottom">
          <CommentForm />
        </div>
      </div>
    </div>
  );
};
