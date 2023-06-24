// import - modules
import { useState, useEffect } from 'react';

// import - react hooks

// import - custom hooks

// import - components

// functions
const useFetch = ( url ) => {
	const [ data, setData ] = useState ( null )
	const [ error, setError ] = useState ( null )
	const [ loading, setLoading ] = useState ( true )

	useEffect ( () => {
		const fetchData = async () => {
			setLoading ( true )

			try {
				const res = await fetch ( url )
				const json = await res.json ()

				setData ( json );
				setLoading ( false )
			} catch ( error ) {
				setError ( error )
				setLoading ( false )
			}
		}

		fetchData ()
			.then ( () => {
			} )
	}, [ url ] )

	return { data, loading, error }
}

export default useFetch;
