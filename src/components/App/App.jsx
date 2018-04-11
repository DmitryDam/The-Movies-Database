import React from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from '../Header/Header';
import Home from '../Home/Home';
import MoviesPage from '../MoviesPage/MoviesPage';
import AboutPage from '../AboutPage/AboutPage';

class App extends React.Component {


    render() {

      return (
        <div className="App">
          <Header text="Movie Mate"/>
          <Switch>
            <Route exact path="/" component={Home} />
            {<Route path="/movies" component={MoviesPage} />}
            {<Route path="/about" component={AboutPage} />}
            <Redirect to="/" />
          </Switch>
   
        </div>
      );
    }
  }

export default App;