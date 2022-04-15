// import React from 'react';
// import { useLocation } from 'react-router-dom';
// // A custom hook that builds on useLocation to parse
// // the query string for you.
// const useQuery = () => {
// 	/* Obtiene el valor en la URL que modifico useHistory */
// 	const { search } = useLocation();

// 	return React.useMemo(() => new URLSearchParams(search), [search]);
// };

// export default useQuery;

import { useLocation } from 'react-router';

export function useQuery() {
	return new URLSearchParams(useLocation().search);
}
