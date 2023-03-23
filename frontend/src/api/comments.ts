/* eslint-disable max-len */
import { CommentType } from '../types/CommentType';

const comments = [
  {
    id: 1,
    parentId: null,
    userId: 1,
    text: 'This is a great post! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt optio velit voluptates vitae magni similique quos, perferendis totam iusto ipsa. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt optio velit voluptates vitae magni similique quos, perferendis totam iusto ipsa. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt optio velit voluptates vitae magni similique quos.',
    createdAt: '2023-03-22T10:00:00.000Z',
    imageLink: null,
    textFileLink: null,
  },
  {
    id: 2,
    parentId: 1,
    userId: 2,
    text: 'I agree, very informative. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt optio velit voluptates vitae magni similique quos, perferendis totam iusto ipsa.',
    createdAt: '2023-03-22T10:05:00.000Z',
    imageLink: null,
    textFileLink: null,
  },
  {
    id: 3,
    parentId: 1,
    userId: 3,
    text: 'Can you provide more details? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt optio velit voluptates vitae magni similique quos, perferendis totam iusto ipsa.',
    createdAt: '2023-03-22T10:10:00.000Z',
    imageLink: null,
    textFileLink: null,
  },
  {
    id: 4,
    parentId: 1,
    userId: 4,
    text: 'This post helped me a lot, thank you! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt optio velit voluptates vitae magni similique quos, perferendis totam iusto ipsa.',
    createdAt: '2023-03-22T10:15:00.000Z',
    imageLink: null,
    textFileLink: null,
  },
  {
    id: 5,
    parentId: 1,
    userId: 2,
    text: 'Nice insights! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt optio velit voluptates vitae magni similique quos, perferendis totam iusto ipsa.',
    createdAt: '2023-03-22T10:20:00.000Z',
    imageLink: null,
    textFileLink: null,
  },
  {
    id: 6,
    parentId: null,
    userId: 3,
    text: 'I have some doubts, can you clarify? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt optio velit voluptates vitae magni similique quos, perferendis totam iusto ipsa.',
    createdAt: '2023-03-22T10:25:00.000Z',
    imageLink: null,
    textFileLink: null,
  },
  {
    id: 7,
    parentId: 6,
    userId: 3,
    text: 'Can you provide more details? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt optio velit voluptates vitae magni similique quos, perferendis totam iusto ipsa.',
    createdAt: '2023-03-22T10:10:00.000Z',
    imageLink: null,
    textFileLink: null,
  },
  {
    id: 8,
    parentId: 6,
    userId: 5,
    text: 'Yes just a second! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt optio velit voluptates vitae magni similique quos, perferendis totam iusto ipsa.',
    createdAt: '2023-03-22T10:30:00.000Z',
    imageLink: null,
    textFileLink: null,
  },
  {
    id: 9,
    parentId: null,
    userId: 1,
    text: 'This is a great post! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt optio velit voluptates vitae magni similique quos, perferendis totam iusto ipsa.',
    createdAt: '2023-03-22T10:00:00.000Z',
    imageLink: null,
    textFileLink: null,
  },
  {
    id: 10,
    parentId: 1,
    userId: 2,
    text: 'I agree, very informative. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt optio velit voluptates vitae magni similique quos, perferendis totam iusto ipsa.',
    createdAt: '2023-03-22T10:05:00.000Z',
    imageLink: null,
    textFileLink: null,
  },
  {
    id: 11,
    parentId: 1,
    userId: 3,
    text: 'Can you provide more details? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt optio velit voluptates vitae magni similique quos, perferendis totam iusto ipsa.',
    createdAt: '2023-03-22T10:10:00.000Z',
    imageLink: null,
    textFileLink: null,
  },
  {
    id: 12,
    parentId: 1,
    userId: 4,
    text: 'This post helped me a lot, thank you! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt optio velit voluptates vitae magni similique quos, perferendis totam iusto ipsa.',
    createdAt: '2023-03-22T10:15:00.000Z',
    imageLink: null,
    textFileLink: null,
  },
  {
    id: 13,
    parentId: 1,
    userId: 2,
    text: 'Nice insights! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt optio velit voluptates vitae magni similique quos, perferendis totam iusto ipsa.',
    createdAt: '2023-03-22T10:20:00.000Z',
    imageLink: null,
    textFileLink: null,
  },
  {
    id: 14,
    parentId: null,
    userId: 3,
    text: 'I have some doubts, can you clarify? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt optio velit voluptates vitae magni similique quos, perferendis totam iusto ipsa.',
    createdAt: '2023-03-22T10:25:00.000Z',
    imageLink: null,
    textFileLink: null,
  },
  {
    id: 15,
    parentId: 6,
    userId: 3,
    text: 'Can you provide more details? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt optio velit voluptates vitae magni similique quos, perferendis totam iusto ipsa.',
    createdAt: '2023-03-22T10:10:00.000Z',
    imageLink: null,
    textFileLink: null,
  },
  {
    id: 16,
    parentId: 6,
    userId: 5,
    text: 'Yes just a second! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt optio velit voluptates vitae magni similique quos, perferendis totam iusto ipsa.',
    createdAt: '2023-03-22T10:30:00.000Z',
    imageLink: null,
    textFileLink: null,
  },
];

const loadTopComments = (): CommentType[] => {
  return comments.filter(c => c.parentId === null);
};

const loadCommentsByParentId = (parentId: number | null): CommentType[] => {
  if (!parentId) {
    return [];
  }

  return comments
    .filter(c => c.parentId === parentId)
    .sort((a, b) => (
      new Date(a.createdAt).valueOf() - new Date(b.createdAt).valueOf()
    ));
};

export const commentsApi = {
  loadTopComments,
  loadCommentsByParentId,
};
