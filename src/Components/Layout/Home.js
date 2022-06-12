import Movies from '../Movies/Movies.js'

function Home({movies, routeToMovieDetail, routeTotypeMovie}) {
    return (
      <div className="movie-display">
        {movies &&
        movies.map((movie) =>(
          <Movies key={movie.id} movie={movie} routeToMovieDetail={routeToMovieDetail} routeTotypeMovie={routeTotypeMovie}/>
        )
        )}
      </div>
    )
}

export default Home;