import movie from './movie.json';
import styles from './Movie.module.css';

const Movie = () => {
	const imgUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

	const getGenres = (movie) => {
		let genres_array = movie.genres.map((genre) => genre.name);

		return genres_array.join(', ');
	};

	return (
		<article className={'container_sm ' + styles.movie_container}>
			<img className={styles.movie_poster} src={imgUrl} alt='' aria-hidden='true' />

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
