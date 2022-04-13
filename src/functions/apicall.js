let api_url = 'https://api.themoviedb.org/3';

export function apicall(config) {
	return fetch(api_url + config, {
		headers: {
			Authorization:
				'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MjQ1MTMyYThhN2ZmM2MxNzk5ZWQ0ODkwNDczNmFhZSIsInN1YiI6IjYxODdkZmYzNzVmMWFkMDA4ZTQzZmEwNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GkCsGErAD-CA9jFSIRrLTZ48ose6SgikpNwOJMsgfaQ',
			'Content-type': 'application/json;charset=utf-8',
		},
	}).then((resp) => resp.json());
}
