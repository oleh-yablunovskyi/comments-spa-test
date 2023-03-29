/* eslint-disable no-console */
import axios from 'axios';
import { CommentType } from '../types/CommentType';

const BASE_URL = 'http://localhost:5000';

const getTopComments = async (): Promise<CommentType[]> => {
  const response = await axios.get(`${BASE_URL}/comments`);

  return response.data;
};

const getCommentsByParentId = async (parentId: number | null): Promise<CommentType[]> => {
  if (!parentId) {
    return [];
  }

  const response = await axios.get(`${BASE_URL}/comments/${parentId}/children`);

  return response.data;
};

export const commentsApi = {
  getTopComments,
  getCommentsByParentId,
};
