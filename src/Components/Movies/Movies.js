import '../Style/Movies.css'

const Movies = ({movie, routeToMovieDetail, routeTotypeMovie}) => {

    return (
      
            <div className = "movie">
                <div className="movie-rate" onClick={() => routeToMovieDetail(movie.id)}>
                    <h4>{movie.vote_average}</h4>
                </div>
                <img src={movie.poster_path} alt={movie.title} onClick={() => routeToMovieDetail(movie.id)}/>
                <div className = 'movie-info'>
                    <h1 onClick={() => routeToMovieDetail(movie.id)}>{movie.title}</h1>
                </div>
                <div className = 'movie-type' onClick={() => routeTotypeMovie(movie.type)}>{movie.type}</div>
            </div>
      
    )
}

export default Movies;