 import React from 'react'
//  "filmtv_ID": 54,
//  "film_title": "Johnny O'Clock",
//  "year": 1947,
//  "genre": "Thriller",
//  "duration": 95,
//  "country": "United States",
//  "director": "Robert Rossen",
//  "actors": "Dick Powell, Evelyn Keyes, Lee J. Cobb, Ellen Drew, Nina Foch",
//  "avg_vote": 8,
//  "votes": 17
// },
 export default function Movie(props){
     console.log(props.movie)
     let movie = props.movie.map(movie => {
           return (<div>
             <h2>{movie.film_title}</h2>
             <h3>{movie.year}</h3>
             <p>{movie.genre}</p>
             <p>{movie.duration}</p>
             {/* <ul>{actors}</ul> */}
         </div>) 

     })
    //  let actors = ''
    //  for(let i = 0; i < props.actors.length; i++){
    //      actors += <li>{props.actors[i]}</li>
    //  }
     return (
         <div>
             {movie}
         </div>
     )
 }