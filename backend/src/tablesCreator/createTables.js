/* eslint-disable no-console */
'use strict';

const { User, Comment } = require('../models/associations');

User.sync({ force: true }).then(() => {
  console.log('User table has been created.');
});

Comment.sync({ force: true }).then(() => {
  console.log('Comment table has been created.');
});
