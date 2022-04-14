import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Search = () => {
	const [search, setSearch] = useState('');
	const history = useHistory();

	/* Prevenimos que el formulario recargue la página */
	const preventSubmit = (e) => {
		e.preventDefault();

		/* Se modifica la URL para que puedan verse y manipular los parámetros que tiene */
		history.push('/?search=' + search);
	};

	return (
		<form onSubmit={preventSubmit}>
			<input
				type='text'
				value={search}
				onChange={(e) => {
					setSearch(e.target.value);
				}}
			/>
			<button type='submit'>Buscar</button>
		</form>
	);
};

export default Search;
