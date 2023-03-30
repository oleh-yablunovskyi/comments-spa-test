/* eslint-disable no-console */
import axios from 'axios';
import { CommentType } from '../types/CommentType';

const BASE_URL = 'http://localhost:5000';

const getTopComments = async (): Promise<CommentType[]> => {
  const response = await axios
    .get(`${BASE_URL}/comments`);

  return response.data;
};

const getChildrenCommentsByID = async (id: number): Promise<CommentType[]> => {
  const response = await axios
    .get(`${BASE_URL}/comments/${id}/children`);

  return response.data;
};

export const commentsApi = {
  getTopComments,
  getChildrenCommentsByID,
};
