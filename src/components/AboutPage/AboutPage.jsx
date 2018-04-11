import React from 'react';
import { Route, Switch,NavLink } from 'react-router-dom';
import './AboutPage.css';
import Team from '../Team';
import CareerInfo from '../CareerInfo/CareerInfo';
import StackList from '../StackList/StackList';

const NavLinks = [
    {
        path: '/team',
        text: 'The team',
    },
    {
        path: '/stack',
        text: 'Our Stack',
    },
    {
        path: '/career',
        text: 'Career',
    }
];
const AboutPage = (props) => {

	return (
		<div className="AboutPage">
			<div className="AboutPage__nav">

			{NavLinks.map(item => (<NavLink key={item.text} className="AboutNav__link" activeClassName="AboutNav__link--active" to={`${props.match.path}${item.path}`}>{item.text}</NavLink>))}
			</div>
			<div className="AboutPage__body">
	
				<Switch>
					<Route path={`${props.match.path}/team`} component={Team} />
					<Route path={`${props.match.path}/stack`} component={StackList} />
					<Route path={`${props.match.path}/career`} component={CareerInfo} />
				</Switch>
			</div>
		</div>
	);

}


export default AboutPage;

