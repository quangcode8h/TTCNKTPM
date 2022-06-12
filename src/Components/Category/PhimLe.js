import Movies from '../Movies/Movies.js'
function PhimLe({movies, routeToMovieDetail, routeTotypeMovie}) {
    
    return (
        <div className='wapper-movie'>
            <h1 className='title'>Phim lẻ</h1>
            <div className="movie-display">
                {movies &&
                movies.map((movie) =>(
                    movie.category_id === '2' ? <Movies key={movie.id} movie={movie} routeToMovieDetail={routeToMovieDetail} routeTotypeMovie={routeTotypeMovie}/> : false
                )
            )}
            </div>
        </div>
    )
}

export default PhimLe