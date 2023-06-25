// import - modules
import React from 'react';
import { Link } from 'react-router-dom'

// import - react hooks

// import - react hooks
import { useQuery, gql } from "@apollo/client";

// import - components

//gql query
const getCategoriesAll = gql`
query {
  categories {
    data {
      id,
      attributes{
      	name, createdAt, updatedAt,  publishedAt
      }
    }
  }
}
`

// functions
const SiteHeader = () => {
	const { data, loading, error } = useQuery ( getCategoriesAll );

	if ( loading ) return <p>Loading...</p>
	if ( error ) return <p>Error: { error.message }</p>

	return (
		<div className="site-header">
			<Link className="link title" to="/">
				Task Management Tool Reviews
			</Link>
			<nav className = "categories">
				<span className="">Category:</span>
				{ data && data.categories.data.map ( ( category ) => {
					return (
						<Link key={ category.id } to={ `/category/${ category.id }` }>
							{category.attributes.name}
						</Link>
					)
				} )
				}
			</nav>
		</div>
	);
};

export default SiteHeader;
