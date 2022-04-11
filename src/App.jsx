import movies from './movies.json';

export const NuevaApp = () => {
	return (
		<div className='App'>
			<header>
				<h1>Películas</h1>
			</header>
			<main>
				<ul>
					{movies.map((movie, i) => {
						return <li key={i}>{movie.title}</li>;
					})}
				</ul>
			</main>
			{console.log(movies)}
		</div>
	);
};
