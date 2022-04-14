import styles from './Landing.module.css';

import MoviesGrid from '../componentes/MoviesGrid';
import Movie from '../paginas/Movie';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Search from '../componentes/Search';

const Landing = () => {
	return (
		<Router>
			<header className={styles.header + ' container'}>
				<h1 className={styles.main_title}>
					<Link to='/'>Movies</Link>
				</h1>

				<Search />
			</header>
			<main className='container'>
				<Switch>
					<Route path='/movie/:movieId'>
						<Movie />
					</Route>
					<Route path='/'>
						<MoviesGrid />
					</Route>
				</Switch>
			</main>
		</Router>
	);
};

export default Landing;
