import styles from './App.module.css';
import MoviesGrid from './componentes/MoviesGrid';
import Movie from './paginas/Movie';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export const NuevaApp = () => {
	return (
		<Router>
			<header className={styles.header + ' container'}>
				<h1 className={styles.main_title}>
					<Link to='/'>Movies</Link>
				</h1>
			</header>
			<main className='container'>
				<Switch>
					<Route path='/movie'>
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
