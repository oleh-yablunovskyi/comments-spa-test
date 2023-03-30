/* eslint-disable no-console */
'use strict';

const express = require('express');
const cors = require('cors');
const comments = require('./mockup_data/comments.json');
const users = require('./mockup_data/users');

const app = express();

app.use(cors());
app.use(express.json());

function findUserById(userId) {
  return users.find(user => user.id === userId);
}

function attachAuthorToComment(comment) {
  const author = findUserById(comment.userId);

  return {
    ...comment,
    userName: author.userName,
    email: author.email,
    homePage: author.homePage,
  };
}

// Get topComments endpoint
app.get('/comments', (req, res) => {
  const sortBy = req.query.sortBy || 'createdAt';
  const sortOrder = req.query.sortOrder || 'asc';

  const page = Number(req.query.page) || 1;
  const perPage = Number(req.query.pageSize) || 25;

  // Filter top-level comments
  const topLevelComments = comments.filter(
    comment => comment.parentId === null
  );

  // Sort comments
  const sortedComments = topLevelComments.sort((a, b) => {
    if (sortOrder === 'asc') {
      return a[sortBy] > b[sortBy] ? 1 : -1;
    } else {
      return a[sortBy] < b[sortBy] ? 1 : -1;
    }
  });

  // Paginate comments
  const startIndex = (page - 1) * perPage;
  const endIndex = startIndex + perPage;
  const paginatedComments = sortedComments.slice(startIndex, endIndex);

  const commentsWithAuthors = paginatedComments.map(attachAuthorToComment);

  res.send(commentsWithAuthors);
});

// Get childrenComments endpoint
app.get('/comments/:id/children', (req, res) => {
  const parentId = Number(req.params.id);

  const childComments = comments.filter(
    comment => comment.parentId === parentId
  );

  if (childComments.length === 0) {
    return res.send([]);
  }

  const childCommentsWithAuthors = childComments.map(attachAuthorToComment);

  res.send(childCommentsWithAuthors);
});

// Start the server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
