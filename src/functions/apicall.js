const api_url = 'https://api.themoviedb.org/3';

/**
 * Call to themoviedb API
 * @param {String} config path parameters
 * @returns api json response
 */
export function apiCall(config) {
	/* Llamada a la API
	- fetch() acepta como segundo parámetro un objeto con las opciones de la petición.
	- los headers se consultaron de la documentación de la API (https://developers.themoviedb.org/3/getting-started/authentication).
	*/
	return fetch(api_url + config, {
		headers: {
			Authorization:
				'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MjQ1MTMyYThhN2ZmM2MxNzk5ZWQ0ODkwNDczNmFhZSIsInN1YiI6IjYxODdkZmYzNzVmMWFkMDA4ZTQzZmEwNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GkCsGErAD-CA9jFSIRrLTZ48ose6SgikpNwOJMsgfaQ',
			'Content-type': 'application/json;charset=utf-8',
		},
	}).then((resp) => resp.json());
}
