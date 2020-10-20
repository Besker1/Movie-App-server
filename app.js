// eslint-disable-next-line strict
require('dotenv').config;
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const movies = require('./movies');


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

//make a function that takes in a endpoint get movie and return 
// compare the strings to see if strings are included and return 

// searching by average vote if the average vote is greater than or equal to supllier number 
// {
//     "filmtv_ID": 2,
//     "film_title": "Bugs Bunny's Third Movie: 1001 Rabbit Tales",
//     "year": 1982,
//     "genre": "Animation",
//     "duration": 76,
//     "country": "United States",
//     "director": "David Detiege, Art Davis, Bill Perez",
//     "actors": "N/A",
//     "avg_vote": 7.7,
//     "votes": 28
//   },

function search(req, res){
  console.log('i am inside the search function');
  const { search } = req.query;
  let  newResult = '';
  if(search){
    newResult = movies.filter(movie => movie.gender.toLowerCase().includes(search.toLowerCase())
    );  
    res.json(newResult);

  }

 

}




app.get('/movie', search);

app.listen(8000, ()=> {
  console.log('server is running');
});



