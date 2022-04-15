import React from 'react';
import MovieCard from './MovieCard';
// import movies from '../movies.json';
import styles from './MoviesGrid.module.css';
import { useEffect, useState } from 'react';
import { apiCall } from '../functions/apicall';
import Spinner from './Spinner';
import { useLocation } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';

const MoviesGrid = () => {
	/* 
	1- La llamada a la API actualiza el estado y le da los valores obtenidos
	2- El estado actualiza el componente
	3- Se renderiza el componente usando la información en movies */
	const [movies, getMovies] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [page, setPage] = useState(1);
	const [hasMore, setHasMore] = useState(true);

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

	/* concatena la búsqueda nueva con lo que se tiene anteriormente lo cual combina dos búsquedas */
	useEffect(() => {
		setIsLoading(true);
		const urlSearch = !search ? '/discover/movie?page=' + page : '/search/movie?query=' + search + '&page=' + page;
		apiCall(urlSearch).then((data) => {
			setIsLoading(false);
			getMovies((prevMovies) => prevMovies.concat(data.results));
			setHasMore(data.page < data.total_pages);
		});
	}, [search, page]);

	/* Se agrega como propiedad de InfiniteScroll */
	// if (isLoading) {
	// 	return <Spinner />;
	// }

	return (
		<InfiniteScroll
			dataLength={movies.length}
			hasMore={hasMore}
			next={() => {
				setPage((prevPage) => prevPage + 1);
			}}
			loader={<Spinner />}>
			<ul className={styles.movies_grid}>
				{movies.map((movie) => (
					<MovieCard movie={movie} key={movie.id} />
				))}
			</ul>
		</InfiniteScroll>
	);
};

export default MoviesGrid;
