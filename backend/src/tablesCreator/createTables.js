/* eslint-disable no-console */
'use strict';

const { User, Comment } = require('../models/associations');

const createTables = async() => {
  await User.sync({ force: true }).then(() => {
    console.log('User table has been created.');
  });

  await Comment.sync({ force: true }).then(() => {
    console.log('Comment table has been created.');
  });
};

module.exports = createTables;
