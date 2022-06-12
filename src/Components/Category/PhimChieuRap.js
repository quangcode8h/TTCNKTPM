import Movies from '../Movies/Movies.js'
function PhimChieuRap({movies, routeToMovieDetail, routeTotypeMovie}) {
    
    return (
        <div className='wapper-movie'>
            <h1 className='title'>Phim chiếu rạp</h1>
            <div className="movie-display">
                {movies &&
                movies.map((movie) =>(
                    movie.category_id === '4' ? <Movies key={movie.id} movie={movie} routeToMovieDetail={routeToMovieDetail} routeTotypeMovie={routeTotypeMovie}/> : false
                )
            )}
            </div>
        </div>
    )
}

export default PhimChieuRap