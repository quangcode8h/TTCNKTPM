import {React, useState, useEffect} from 'react'
import { Routes, Route, useNavigate } from "react-router-dom"
import {Movies, Header, Home, PhimMoi, PhimBo, PhimLe,PhimHoatHinh, PhimChieuRap, Search, TypeMovies, MovieDetail, Footer, LogIn, Register, WatchMovieTrailer} from './Components/Data/ContectData'

function App() {
	const [movies, setMovies] = useState([]);
	const [user, setUser] = useState([
		{
			id: 0,
        	username: '',
        	email: '',
        	password: ''
		}
	]);
	const [isOpenForm, setIsOpenForm] = useState({
		isOpen: false,
		formName: 'Login'
	});
	

	useEffect(() => {
		setMovies(Movies);
	}, [])
	//#region navigate page
	let navigate = useNavigate();
	//dieu huong den trang Search movie
	const [valueSreach, setValueSearch] = useState('');
	const routeToSearch = () => {
		const path = '/search';
		navigate(path);
	}
	//dieu huong den trang movie detail
  	const routeToMovieDetail = (id) => {
		const movieDetailFind = movies.filter(movie => movie.id === id)

		const jsonTypeMovies = JSON.stringify(movieDetailFind);
        localStorage.setItem('movieDetail', jsonTypeMovies);

		const path = '/detail';
		navigate(path);
	}

	//dieu huong den trang type movie
  	const routeTotypeMovie = (type) => {
		
        const typeMoviesFind = movies.filter(
            movie => ( type && movie.type.toLowerCase().includes(type.toLowerCase()) )
        )
		const jsonTypeMovies = JSON.stringify(typeMoviesFind);
        localStorage.setItem('typeMovies', jsonTypeMovies);

		const path = '/typemovie';
		navigate(path);
  	}

	//dieu huong den watch movie trailer
	const [movieTrailer, setMovieTrailer] = useState([]);
	const routeToMovieTrailer = (id) => {
		setMovieTrailer( () => {
			const movieDetailFind = movies.filter(movie => movie.id === id)

			const jsonTypeMovies = JSON.stringify(movieDetailFind);
            localStorage.setItem('movieTrailer', jsonTypeMovies);

			return movieDetailFind;
		})
		const path = '/watch-movie-trailer';
		navigate(path);
	}
	//#endregion
  	return (
		<div className="App">
			<div className='wrapper'>
			{ 
				isOpenForm.isOpen && 
				(isOpenForm.formName === 'Login' ?
				<LogIn setUser={setUser} setIsOpenForm={setIsOpenForm}/> :
				<Register setIsOpenForm={setIsOpenForm}/>
				)
			}
				<Header user={user} setIsOpenForm={setIsOpenForm}/>
				<div className="search-movie">
					<input  
					value = {valueSreach}
					onChange = {(e) => setValueSearch(e.target.value)}
					placeholder="Enter movie's name"
					/>
					<button className="submit" onClick={routeToSearch}>Tìm kiếm</button>
				</div>
				<Routes>
					<Route path="/" element={<Home movies = {movies} routeToMovieDetail={routeToMovieDetail} routeTotypeMovie={routeTotypeMovie}/>} />
					<Route path="/phimmoi" element={<PhimMoi movies = {movies} routeToMovieDetail={routeToMovieDetail} routeTotypeMovie = {routeTotypeMovie}/>} />
					<Route path="/phimbo" element={<PhimBo movies = {movies} routeToMovieDetail={routeToMovieDetail} routeTotypeMovie={routeTotypeMovie}/>} />
					<Route path="/phimle" element={<PhimLe movies = {movies} routeToMovieDetail={routeToMovieDetail} routeTotypeMovie = {routeTotypeMovie}/>} />
					<Route path="/phimchieurap" element={<PhimChieuRap movies = {movies} routeToMovieDetail={routeToMovieDetail} routeTotypeMovie = {routeTotypeMovie}/>} />
					<Route path="/phimhoathinh" element={<PhimHoatHinh movies = {movies} routeToMovieDetail={routeToMovieDetail} routeTotypeMovie = {routeTotypeMovie}/>} />
					<Route path="/search" element={<Search movies = {movies}  valueS = {valueSreach} routeToMovieDetail={routeToMovieDetail} routeTotypeMovie={routeTotypeMovie}/>} />
					<Route path="/typeMovie" element={<TypeMovies routeToMovieDetail={routeToMovieDetail} routeTotypeMovie={routeTotypeMovie} />} />
					<Route path="/detail" element={<MovieDetail routeTotypeMovie={routeTotypeMovie} routeToMovieTrailer={routeToMovieTrailer}/>} />
					<Route path="/watch-movie-trailer" element={<WatchMovieTrailer/>}/>					
					<Route path="/login" element={<LogIn setUser={setUser} setIsOpenForm={setIsOpenForm}/>}/>
					<Route path="/register" element={<Register setIsOpenForm={setIsOpenForm}/>}/>				
				</Routes>
				<Footer/>
			</div>
			
		</div>
	)	
}

export default App;
