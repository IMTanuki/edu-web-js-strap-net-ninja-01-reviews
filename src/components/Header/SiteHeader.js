// import - react modules
import React from 'react';
import { Link } from 'react-router-dom'

// import - react hooks
import { useQuery } from "@apollo/client";

// import - custom modules
import { GET_CATEGORIES_ALL } from "../../data/queries/queriesCategories";

// import - custom hooks

// import - components

// functions
const SiteHeader = () => {
	const { data, loading, error } = useQuery ( GET_CATEGORIES_ALL);

	if ( loading ) return <p>Loading...</p>
	if ( error ) return <p>Error: { error.message }</p>

	return (
		<div className="site-header">
			<Link className="link title" to="/">
				Task Management Tool Reviews
			</Link>
			<nav className = "categories">
				<span className="">Category:</span>
				{ data && data.categories.map ( ( category ) => {
					return (
						<Link key={ category.id } to={ `/category/${ category.id }` }>
							{category.name}
						</Link>
					)
				} )
				}
			</nav>
		</div>
	);
};

export default SiteHeader;
