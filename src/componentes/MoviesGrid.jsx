import MovieCard from './MovieCard';
import movies from '../movies.json';
import styles from './MoviesGrid.module.css';

const MoviesGrid = () => {
	return (
		<ul className={styles.movies_grid}>
			{movies.map((movie) => (
				<MovieCard movie={movie} key={movie.id} />
			))}
		</ul>
	);
};

export default MoviesGrid;
