// eslint-disable-next-line strict
require('dotenv').config;
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());

app.use(function validateBearerToken(req, res, next) {
  const API_TOKEN = process.env.API_TOKEN;
  const authToken = req.get('Authorization');
  
  if (!authToken || authToken.split(' ')[1] !== API_TOKEN) {
    return res.status(401).json({ error: 'Unauthorized request' });
  }
  // move to the next middleware
  next();
});



