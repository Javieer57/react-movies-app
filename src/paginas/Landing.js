import MoviesGrid from '../componentes/MoviesGrid';
import Search from '../componentes/Search';
import { useDebounce } from '../hooks/useDebounce';
import { useQuery } from '../hooks/useQuery';

const Landing = () => {
	/* query es un objeto que devuelve solo el valor de search=valor de la URL con el método get() */
	const query = useQuery();
	const search = query.get('search');

	/* El valor se agregar a key y a search en MoviesGrid para que actualice esos valores cuando debounceValue tenga el nuevo valor. Si en key se deja search, destruye la grilla porque tiene el valor nuevo y después recibe el valor para realizar la petición a la API */
	const debounceValue = useDebounce(search, 300);

	return (
		<>
			<Search />
			<MoviesGrid key={debounceValue} search={debounceValue} />
		</>
	);
};

export default Landing;
