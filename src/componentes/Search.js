import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useQuery } from '../hooks/useQuery';

const Search = () => {
	const history = useHistory();
	const query = useQuery();
	const search = query.get('search');

	/* Prevenimos que el formulario recargue la página */
	const preventSubmit = (e) => {
		e.preventDefault();

		/* Se modifica la URL para que puedan verse y manipular los parámetros que tiene */
		// history.push('/?search=' + search);
	};

	return (
		<form onSubmit={preventSubmit}>
			<input
				type='text'
				value={search ? search : ''}
				onChange={(e) => {
					const search = e.target.value;
					history.push('/?search=' + search);
				}}
			/>
			<button type='submit'>Buscar</button>
		</form>
	);
};

export default Search;
