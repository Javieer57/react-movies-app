// import movie from './movie.json';
import Spinner from '../componentes/Spinner';
import styles from './Movie.module.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { apiCall } from '../functions/apicall';

const Movie = () => {
	const { movieId } = useParams();
	const [movie, getMovie] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const imgUrl = `https://image.tmdb.org/t/p/w500`;

	const getGenres = (movie) => {
		/* Sin la condición validando undefined, la función rompe la ejecución del programa */
		// let genres_array = [];
		// movie.genres === undefined ? (genres_array = []) : (genres_array = movie.genres.map((genre) => genre.name));

		let genres_array = movie.genres.map((genre) => genre.name);
		return genres_array.join(', ');
	};

	useEffect(() => {
		setIsLoading(true);
		apiCall(`/movie/${movieId}`).then((data) => {
			setIsLoading(false);
			getMovie(data);
		});
	}, [movieId]);

	if (isLoading) {
		return <Spinner />;
	}

	/* 
	- Con esta condición evitamos que se renderice el componente la primera vez lo cual causa error al no tener información en movie
	- Al no causar error no es necesario incluir la condición extra en getGenres() */
	if (!movie) {
		return null;
	}

	return (
		<article className={'container_sm ' + styles.movie_container}>
			<div className={styles.movie_poster}>
				<div className={styles.movie_poster_aspect_ratio}>
					<img src={imgUrl + movie.poster_path} alt='' aria-hidden='true' />
				</div>
			</div>

			<div className={styles.movie_description}>
				<h1 className={styles.movie_title}>{movie.title}</h1>
				<p>
					<span className='fw-bold'>Release date:</span> {movie.release_date}
				</p>
				<p>
					<span className='fw-bold'>Genres:</span> {getGenres(movie)}
				</p>
				<p>
					<span className='fw-bold'>Overview:</span> {movie.overview}
				</p>
			</div>
		</article>
	);
};

export default Movie;
