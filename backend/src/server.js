/* eslint-disable no-console */
'use strict';

const express = require('express');
const cors = require('cors');
const { User, Comment } = require('./models/associations');
const setupDatabase = require('./main');

// Multer
const multer = require('multer');

const storage = multer.diskStorage({
  destination: (_req, file, cb) => {
    if (file.fieldname === 'imageFile') {
      cb(null, 'uploads/images/');
    } else if (file.fieldname === 'textFile') {
      cb(null, 'uploads/text/');
    } else {
      cb(new Error('Invalid field name'));
    }
  },
  filename: (_req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

const app = express();

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

// Get topComments endpoint
app.get('/comments', async(req, res) => {
  const sortBy = req.query.sortBy || 'created_at';
  const sortOrder = req.query.sortOrder || 'asc';
  const page = Number(req.query.page) || 1;
  const perPage = Number(req.query.pageSize) || 25;

  try {
    // Fetch top-level comments and add authors to them
    const topLevelComments = await Comment.findAll({
      where: {
        parent_comment_id: null,
      },
      include: [
        {
          model: User,
          attributes: ['id', 'user_name', 'email', 'home_page'],
          as: 'author',
        },
      ],
      order: [[sortBy, sortOrder]],
      limit: perPage,
      offset: (page - 1) * perPage,
    });

    res.send(topLevelComments);
  } catch (error) {
    console.error('Error fetching top-level comments:', error);
    res.status(500).send(`Internal server error: ${error.message}`);
  }
});

// Get childrenComments endpoint
app.get('/comments/:id/children', async(req, res) => {
  const parentId = Number(req.params.id);

  try {
    // Fetch child-comments and add authors to them
    const childComments = await Comment.findAll({
      where: {
        parent_comment_id: parentId,
      },
      include: [
        {
          model: User,
          attributes: ['id', 'user_name', 'email', 'home_page'],
          as: 'author',
        },
      ],
      order: [
        ['created_at', 'ASC'],
      ],
    });

    if (!childComments || childComments.length === 0) {
      return res.send([]);
    }

    res.send(childComments);
  } catch (err) {
    console.error('Error fetching child comments:', err);
    res.status(500).send('Internal server error');
  }
});

// Create newComment endpoint
app.post('/comments', upload.fields([{ name: 'imageFile' }, { name: 'textFile' }]), async(req, res) => {
  const {
    userName,
    email,
    homePage,
    parentId,
    message,
  } = req.body;

  try {
    // Check if the user exists
    let user = await User.findOne({
      where: { email },
    });

    // Create new user if user doesn't exist
    if (!user) {
      user = await User.create({
        user_name: userName,
        email,
        home_page: homePage,
      });
    }

    // Get the uploaded files links
    const { imageFile, textFile } = req.files;

    const imageLink = imageFile
      ? `uploads/images/${imageFile[0].filename}`
      : null;

    const textFileLink = textFile
      ? `uploads/text/${textFile[0].filename}`
      : null;

    // Create a new comment with the provided data
    const newComment = await Comment.create({
      user_id: user.id,
      text: message,
      parent_comment_id: Number(parentId) || null,
      image_link: imageLink,
      text_file_link: textFileLink,
    });

    // Fetch the newly created comment with the author
    const createdComment = await Comment.findOne({
      where: { id: newComment.id },
      include: [
        {
          model: User,
          attributes: ['id', 'user_name', 'email', 'home_page'],
          as: 'author',
        },
      ],
    });

    if (!createdComment) {
      return res.status(500).send('Error creating comment');
    }

    res.send(createdComment);
  } catch (err) {
    console.error('Error creating comment:', err);
    res.status(500).send('Internal server error');
  }
});

// Start the server
const PORT = process.env.PORT || 5000;

(async() => {
  try {
    await setupDatabase();

    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Error while creating tables:', error);
  }
})();
