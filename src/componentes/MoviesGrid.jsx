import MovieCard from './MovieCard';
// import movies from '../movies.json';
import styles from './MoviesGrid.module.css';
import { useEffect, useState } from 'react';
import { apicall } from '../functions/apicall';

const MoviesGrid = () => {
	/* 
	1- La llamada a la API actualiza el estado y le da los valores obtenidos
	2- El estado actualiza el componente
	3- Se renderiza el componente usando la información en movies */
	const [movies, getMovies] = useState([]);

	/* Llamada a la API
	- fetch() acepta como segundo parámetro un objeto con las opciones de la petición.
	- los headers se consultaron de la documentación de la API.
	*/
	useEffect(() => {
		apicall('/discover/movie/').then((data) => {
			getMovies(data.results);
		});
	}, []);

	return (
		<ul className={styles.movies_grid}>
			{movies.map((movie) => (
				<MovieCard movie={movie} key={movie.id} />
			))}
		</ul>
	);
};

export default MoviesGrid;
