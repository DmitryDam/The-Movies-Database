import React from 'react';
import PropTypes from 'prop-types';
import './WatchList.css';
import WatchlistCard from '../WatchlistCard/WatchlistCard';

export default class WatchList extends React.Component {
	static propTypes = {
		watchlist: PropTypes.arrayOf(PropTypes.shape({
			id: PropTypes.string.isRequired,
			title: PropTypes.string.isRequired,
			text: PropTypes.string.isRequired,
			rating: PropTypes.number.isRequired,
			release: PropTypes.number.isRequired,
			poster: PropTypes.string.isRequired
		}).isRequired).isRequired,
		DeleteCardProps: PropTypes.func.isRequired	
	};

	render() {
		const { watchlist, DeleteCardProps } = this.props;
			return (
				<div className="WatchList">
					<h2 className="WatchList__title">WatchList</h2>
					<p className="WatchList__msg">Add movies to watchlist...</p>
					{watchlist.map((likeList) => (<WatchlistCard key={likeList.id} DeleteMovieCard={() => {DeleteCardProps(likeList.id)}} {...likeList}/>))}
				</div>		
			)					
	}	
}
