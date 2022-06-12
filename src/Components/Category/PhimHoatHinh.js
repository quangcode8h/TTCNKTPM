import Movies from '../Movies/Movies.js'

function PhimHoatHinh({movies, routeToMovieDetail, routeTotypeMovie}) {
  
    return (
        <div className='wapper-movie'>
            <h1 className='title'>Phim hoạt hình</h1>
            <div className="movie-display">
                {movies &&
                movies.map((movie) =>(
                    movie.category_id === '3' ? <Movies key={movie.id} movie={movie} routeToMovieDetail={routeToMovieDetail} routeTotypeMovie={routeTotypeMovie}/> : false
                )
            )}
            </div>
        </div>
    )
}

export default PhimHoatHinh