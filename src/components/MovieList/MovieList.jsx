import React from 'react';
import PropTypes from 'prop-types';
import './MovieList.css';
import MovieCard from '../MovieCard/MovieCard';

class MovieList extends React.Component {
	static propTypes = {
		movieCardsProps: PropTypes.arrayOf(PropTypes.shape({
			id: PropTypes.string.isRequired,
			title: PropTypes.string.isRequired,
			text: PropTypes.string.isRequired,
			rating: PropTypes.number.isRequired,
			release: PropTypes.number.isRequired,
			poster: PropTypes.string.isRequired
		}).isRequired).isRequired,
		AddCardProps: PropTypes.func.isRequired,	
	};

	render() {
		const { movieCardsProps, AddCardProps } = this.props;

		if (movieCardsProps.length !== 0) {
			return (
				<div className="MovieList">
					{movieCardsProps.map((movies) => (
						<div className="MovieList__item" key={movies.id}>
							<MovieCard {...movies} 
								AddMovieCard={() => {AddCardProps(movies)}} />
						</div>))}
				</div>
			);
		}

		else {
			return (
				<div className="MovieList"><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
					<p className="MovieList__msg">Sorry, we didn't find anything <br/>(⌣́_⌣̀)</p>
				</div>
			);
		}

		
	}
}

export default MovieList;