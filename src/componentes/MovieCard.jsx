import styles from './MovieCard.module.css';
import thumb from './movie_thumb.jpg';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
	const imgUrl = movie.poster_path ? 'https://image.tmdb.org/t/p/w500' + movie.poster_path : thumb;

	return (
		<li className={styles.movie_card}>
			<Link to={'/movie/' + movie.id}>
				<div className={styles.movie_poster}>
					<img src={imgUrl} alt='' aria-hidden='true' />
				</div>
				<h3 className={styles.movie_title}>{movie.title}</h3>
			</Link>
		</li>
	);
};

export default MovieCard;
