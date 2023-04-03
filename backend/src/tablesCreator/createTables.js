/* eslint-disable max-len */
/* eslint-disable no-console */
'use strict';

const fs = require('fs');
const path = require('path');
const { QueryTypes } = require('sequelize');
const sequelize = require('../utils/db');
const { User, Comment } = require('../models/associations');

const usersFilePath = path.join(__dirname, '..', 'mockup_data', 'users.json');
const usersData = fs.readFileSync(usersFilePath, 'utf-8');
const users = JSON.parse(usersData);

const commentsFilePath = path.join(__dirname, '..', 'mockup_data', 'comments.json');
const commentsData = fs.readFileSync(commentsFilePath, 'utf-8');
const comments = JSON.parse(commentsData);

const createTables = async() => {
  try {
    // Create User table
    await User.sync({ force: true });
    console.log('User table has been created.');

    // Populate User table with mockup users
    await User.bulkCreate(users);
    console.log('User table has been populated with data from users.json.');

    // Reset the primary key sequence for the User table
    await sequelize.query('SELECT setval(\'users_id_seq\', (SELECT MAX(id) FROM users))', { type: QueryTypes.SELECT });
    console.log('User id sequence has been reset.');

    // Create Comment table
    await Comment.sync({ force: true });
    console.log('Comment table has been created.');

    // Populate Comment table with mockup comments
    await Comment.bulkCreate(comments);
    console.log('Comment table has been populated with data from comments.json.');

    // Reset the primary key sequence for the Comment table
    await sequelize.query('SELECT setval(\'comments_id_seq\', (SELECT MAX(id) FROM comments))', { type: QueryTypes.SELECT });
    console.log('Comment id sequence has been reset.');
  } catch (error) {
    console.error('Error while creating and populating tables:', error);
  }
};

module.exports = createTables;
