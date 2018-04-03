import React from 'react';
import './Sidebar.css';

export default class Sidebar extends React.Component {
	render() {
		return (
			<div className="App__sidebar">
				{this.props.children}
			</div>
			
		);
	}
}
