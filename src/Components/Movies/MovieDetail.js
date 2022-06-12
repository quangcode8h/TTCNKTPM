import React, {useState} from 'react';
import '../Style/Movies.css'

function MovieDetail({routeTotypeMovie, routeToMovieTrailer}) {

    const [movies, setMovies] = useState(() => {
        const localMovies = JSON.parse(localStorage.getItem('movieDetail'))
        return localMovies;
    });

    return(
        movies.map((movie,index) => (
        <div key = {index} className = "movie-detail">
           <div className = "movie-detail-info">
               <div className = "movie-detail-img">
                   <img src={movie.poster_path} alt={movie.title}/>
               </div>
               <div className="movie-detail-info-text">
                   <h1>{movie.title}</h1>
                   <h4>Năm phát hành: {movie.release_date}</h4>
                   <h4>Đánh giá: {movie.vote_average}</h4>
                   <h4 className='type-movie' onClick={() => routeTotypeMovie(movie.type)}>{movie.type}</h4>
                    <button to='/watch-movie-trailer' className='btn-trailer' onClick={() => routeToMovieTrailer(movie.id)}>Trailer</button>
               </div>
           </div>

           <div className = "movie-detail-overview">
                <h1>Tóm tắt phim</h1>
                <p>{movie.overview}</p>
                <h1>Nội dung phim</h1>
                <p>{movie.content}</p>
           </div>
    
           <div className = "movie-detail-video">
                <h3>Official trailer</h3>
                <iframe 
                    className="video"
                    width="700" height="500" 
                    src={movie.video}
                    title="YouTube video player" frameBorder="0" 
                    allow="autoplay; encrypted-media" 
                    allowFullScreen
                >
                </iframe>
           </div>
        </div>
        ))        
        
    )
}

export default MovieDetail;