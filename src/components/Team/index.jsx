import React from 'react';
import {NavLink, Route} from 'react-router-dom';
import teamDB from '../../TeamDB'
import './style.css';

const getUserByID = (user,id) =>
    user.find(u => u.id === id);

const Team = (props) => {
    return (
        <div className="TeamList">
            <ul className="TeamList__members">
                {teamDB.map(item => (
                    <li key={item.id}>
                        <NavLink
                            className="TeamList__members__link"
                            activeClassName="TeamList__members__link--active"
                            to={`${props.match.path}/${item.id}`}>
                            {item.name}
                        </NavLink>
                    </li>)
                )}
            </ul>

            <div className="TeamList__card">
                <Route path={`${props.match.path}/:userID`} render={(props) => {
                    const userID = props.match.params.userID;
                    const user = getUserByID(teamDB, userID);
                    return user 
                        ? (
                            <div className="MemberCard">
                                <img className="MemberCard__img" src={user.photo} alt={user.name}/>
                                <div className="MemberCard__info">
                                    <h2 className="MemberCard__name">{user.name}</h2>
                                    <p className="MemberCard__pos">{user.position}</p>
                                </div>
                            </div>
                        )
                        : null;
                }}
                />
            </div>
        </div>
    );
};

export default Team;

