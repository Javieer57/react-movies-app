// import movie from './movie.json';
import styles from './Movie.module.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { apicall } from '../functions/apicall';

const Movie = () => {
	const [movie, getMovie] = useState({});
	const { movieId } = useParams();
	const imgUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

	/* Sin la condición validando undefined, la función rompe la ejecución del programa */
	const getGenres = (movie) => {
		if (movie.genres === undefined) {
			return;
		} else {
			let genres_array = movie.genres.map((genre) => genre.name);
			return genres_array.join(', ');
		}
	};

	useEffect(() => {
		apicall(`/movie/${movieId}`).then((data) => {
			getMovie(data);
		});
	}, [movieId]);

	return (
		<article className={'container_sm ' + styles.movie_container}>
			<div className={styles.movie_poster}>
				<div className={styles.movie_poster_aspect_ratio}>
					<img src={imgUrl} alt='' aria-hidden='true' />
				</div>
			</div>

			<div className={styles.movie_description}>
				<h1 className={styles.movie_title}>{movie.title}</h1>

				<p>
					<span className='fw-bold'>Release date:</span> {movie.release_date}
				</p>
				<p>
					<span className='fw-bold'>Genres:</span> {getGenres(movie)}
					{/* <span className='fw-bold'>Genres:</span> {movie.genres.map((genre) => genre.name)} */}
				</p>
				<p>
					<span className='fw-bold'>Overview:</span> {movie.overview}
				</p>
			</div>
		</article>
	);
};

export default Movie;
