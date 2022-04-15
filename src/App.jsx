import styles from './App.module.css';
import Landing from './paginas/Landing';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Movie from './paginas/Movie';

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
					<Route path='/movie/:movieId'>
						<Movie />
					</Route>
					<Route path='/'>
						<Landing />
					</Route>
				</Switch>
			</main>
		</Router>
	);
	// <Landing />;
};
