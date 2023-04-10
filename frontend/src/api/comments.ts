/* eslint-disable no-console */
import axios from 'axios';
import { CommentType } from '../types/CommentType';

// const BASE_URL = 'https://comments-spa-test.onrender.com';
const BASE_URL = 'http://localhost:5000';

// const getTopComments = async (): Promise<CommentType[]> => {
//   const response = await axios
//     .get(`${BASE_URL}/comments`);

//   return response.data;
// };

const getTopComments = async (
  sortBy: string,
  sortOrder: string,
  page: number,
  // perPage: number,
): Promise<CommentType[]> => {
  const response = await axios
    .get(`${BASE_URL}/comments?sortBy=${sortBy}&sortOrder=${sortOrder}&page=${page}`);

  return response.data;
};

const getChildrenCommentsByID = async (id: number): Promise<CommentType[]> => {
  const response = await axios
    .get(`${BASE_URL}/comments/${id}/children`);

  return response.data;
};

const createComment = async (payload: FormData) => {
  const response = await axios.post(`${BASE_URL}/comments`, payload, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  if (response.status !== 200) {
    throw new Error('Error submitting comment');
  }

  return response.data;
};

const getFile = async (fileLink: string): Promise<Blob> => {
  const response = await axios.get(`${BASE_URL}/${fileLink}`, {
    responseType: 'blob',
  });

  return response.data;
};

export const commentsApi = {
  getTopComments,
  getChildrenCommentsByID,
  createComment,
  getFile,
};
