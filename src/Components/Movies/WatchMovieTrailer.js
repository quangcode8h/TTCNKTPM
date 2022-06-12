import React, {useRef} from 'react';

function WatchTrailer() {
        const localMovies = JSON.parse(localStorage.getItem('movieTrailer'))
        const movies = useRef(localMovies);
        console.log(movies.current);
    return (

        movies.current.map((movie,index) => (
        <div key = {index} className = "movie-detail">
           <div className = "movie-detail-info">
               <div className = "movie-detail-img">
                   <img src={movie.poster_path} alt={movie.title}/>
               </div>
               <div className="movie-detail-info-text">
                   <h1>{movie.title}</h1>
                   <h4>Năm phát hành: {movie.release_date}</h4>
                   <h4>Đánh giá: {movie.vote_average}</h4>
               </div>
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

export default WatchTrailer;