import {React, useState, useEffect} from 'react';
import Movies from '../Movies/Movies.js'
import '../Style/Search.css'
function Search({movies, valueS, routeToMovieDetail, routeTotypeMovie}){
  
  const [moviesSearch, setMoviesSearch] = useState([]);
  
  useEffect(() => {
    setMoviesSearch(movies.filter(movie => ( 
      movie.title && movie.title.toLowerCase().includes(valueS.toLowerCase()) 
    )));

    return ()=>{
      setMoviesSearch([])
    }
  },[valueS]);

  return(
    <div className="movie-display">
      {
        moviesSearch.length > 0 ? moviesSearch.map((movie, index) =>(
            index < 10 ? 
            <Movies key={movie.id} movie = {movie} routeToMovieDetail={routeToMovieDetail} routeTotypeMovie={routeTotypeMovie}/> : 
            false
        )) : false
      }
    </div>

    )
}

export default Search;