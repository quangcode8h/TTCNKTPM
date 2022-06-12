import {React} from 'react';
import Movies from '../Movies/Movies.js'
function PhimMoi({movies, routeToMovieDetail, routeTotypeMovie}) {
    return (
      <div className='wapper-movie'>
      <h1 className='title'>Phim mới</h1>
      <div className="movie-display">
          {movies &&
          movies.map((movie) =>(
              movie.category_id === '0' || movie.release_date.split('/')[2] === '2022' ? <Movies key={movie.id} movie={movie} routeToMovieDetail={routeToMovieDetail} routeTotypeMovie={routeTotypeMovie}/> : false
          )
      )}
      </div>
  </div>
    )
}
export default PhimMoi