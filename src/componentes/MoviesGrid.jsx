import React from 'react';
import MovieCard from './MovieCard';
// import movies from '../movies.json';
import styles from './MoviesGrid.module.css';
import { useEffect, useState } from 'react';
import { apiCall } from '../functions/apicall';
import Spinner from './Spinner';
import { useLocation } from 'react-router-dom';

const MoviesGrid = () => {
	/* 
	1- La llamada a la API actualiza el estado y le da los valores obtenidos
	2- El estado actualiza el componente
	3- Se renderiza el componente usando la información en movies */
	const [movies, getMovies] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	// A custom hook that builds on useLocation to parse
	// the query string for you.
	function useQuery() {
		/* Obtiene el valor en la URL que modifico useHistory */
		const { search } = useLocation();

		return React.useMemo(() => new URLSearchParams(search), [search]);
	}

	/* query es un objeto que devuelve solo el valor de search=valor de la URL con el método get() */
	const query = useQuery();
	const search = query.get('search');

	// ;
	useEffect(() => {
		setIsLoading(true);
		const urlSearch = !search ? '/discover/movie/' : '/search/movie/?query=' + search;
		apiCall(urlSearch).then((data) => {
			setIsLoading(false);
			getMovies(data.results);
		});
	}, [search]);

	if (isLoading) {
		return <Spinner />;
	}

	return (
		<ul className={styles.movies_grid}>
			{movies.map((movie) => (
				<MovieCard movie={movie} key={movie.id} />
			))}
		</ul>
	);
};

export default MoviesGrid;
