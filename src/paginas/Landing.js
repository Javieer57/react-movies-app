import MoviesGrid from '../componentes/MoviesGrid';
import Search from '../componentes/Search';
import { useQuery } from '../hooks/useQuery';

const Landing = () => {
	/* query es un objeto que devuelve solo el valor de search=valor de la URL con el método get() */
	const query = useQuery();
	const search = query.get('search');
	return (
		<>
			<Search />
			<MoviesGrid key={search} search={search} />
		</>
	);
};

export default Landing;
