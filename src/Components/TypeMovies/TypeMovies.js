import React, {useRef} from 'react';
import Movies from '../Movies/Movies.js'

function TypeMovies({routeToMovieDetail, routeTotypeMovie}){
    
    const localMovies = JSON.parse(localStorage.getItem('typeMovies'))
    const movies = useRef(localMovies); 

    return(
        <div className="movie-display">
        {movies.current &&
        movies.current.map((movie, index) =>(
            index < 10 ? <Movies key={movie.id} movie={movie} routeToMovieDetail={routeToMovieDetail} routeTotypeMovie={routeTotypeMovie}/> : false
        )
        )}
      </div>
    )
}

export default TypeMovies
