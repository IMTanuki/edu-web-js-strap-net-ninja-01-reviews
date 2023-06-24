// import - modules
import {React} from 'react';
import {Link} from 'react-router-dom';

// import - react hooks
import useFetch from '../../hooks/useFetch';

// import - custom hooks

// import - components

// functions
const Home = () => {
	const { data, loading, err } = useFetch ( 'http://localhost:5000/api/reviews' );

	if ( loading ) return <p>Loading...</p>
	if ( err ) return <p>Error...:>((</p>


	return (

		<div>
			<h2>HOME PAGE</h2>
			<div>
				{ data.data.map ( ( review ) => {
					return (
						<div key={ review.id } className="review-card">
							<div className="rating">{ review.attributes.rating }</div>
							<h2 >{ review.attributes.title }</h2>
							<small> console list</small>
							<p >{ review.attributes.body.substr(0,500) }...</p>
							<br></br>
							<Link to={`/review-details/${review.id}`}>Read More...</Link>
						</div>
						)
					}
				) }
			</div>
		</div>
	);
};

export default Home;
