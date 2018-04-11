import React from 'react';
import './StackList.css';
import v4 from 'uuid/v4';
import css3 from './assets/css-3.svg';
import html5 from './assets/html5.svg';
import javascript from './assets/javascript.svg';
import react from './assets/react.svg';
import reactrouter from './assets/react-router.svg';
import redux from './assets/redux.svg';
import webpack from './assets/webpack-icon.svg';


const stackImages = [
	{
		path: html5,
		id: v4()
	},
	{
		path: css3,
		id: v4()
	},
	{
		path: javascript,
		id: v4()
	},
	{
		path: react,
		id: v4()
	},
	{
		path: reactrouter,
		id: v4()
	},
	{
		path: redux,
		id: v4()
	},
	{
		path: webpack,
		id: v4()
	}
];

const StackList = (props) => {
	return (
		<ul className="StackList">
			{stackImages.map(list => (
				<li key={(list.id).toString()} className="StackList_item">
					<img className="StackList_icon"  src={list.path} alt={list.id} />
				</li>
			))}		
		</ul>
	);
};


export default StackList;