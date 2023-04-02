/* eslint-disable max-len */
/* eslint-disable no-console */
'use strict';

// const { User, Comment } = require('../models/associations');

// const createTables = async() => {
//   await User.sync({ force: true }).then(() => {
//     console.log('User table has been created.');
//   });

//   await Comment.sync({ force: true }).then(() => {
//     console.log('Comment table has been created.');
//   });
// };

// module.exports = createTables;

const fs = require('fs');
const path = require('path');
const { User, Comment } = require('../models/associations');

const usersFilePath = path.join(__dirname, '..', 'mockup_data', 'users.json');
const usersData = fs.readFileSync(usersFilePath, 'utf-8');
const users = JSON.parse(usersData);

const commentsFilePath = path.join(__dirname, '..', 'mockup_data', 'comments.json');
const commentsData = fs.readFileSync(commentsFilePath, 'utf-8');
const comments = JSON.parse(commentsData);

const createTables = async() => {
  try {
    // Create and populate User table
    await User.sync({ force: true });
    console.log('User table has been created.');

    await User.bulkCreate(users);
    console.log('User table has been populated with data from users.json.');

    // Create and populate Comment table
    await Comment.sync({ force: true });
    console.log('Comment table has been created.');

    await Comment.bulkCreate(comments);
    console.log('Comment table has been populated with data from comments.json.');
  } catch (error) {
    console.error('Error while creating and populating tables:', error);
  }
};

module.exports = createTables;
