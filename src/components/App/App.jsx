import React from 'react';
import './App.css';
import Header from '../Header/Header';
import AppBody from '../AppBody/AppBody';
import { fetchDataStart,fetchDataName } from 'API';
import Sidebar from '../Sidebar/Sidebar';
import MovieList from '../MovieList/MovieList';
import Form from '../Form/Form';
import WatchList from '../WatchList/WatchList';
import SearchCategories from '../SearchCategories/SearchCategories';



class App extends React.Component {

  state = {
    movieCardsState: [],
    watchlist: JSON.parse(localStorage.getItem('localStorFilm')) 
  }

  componentWillMount(){
    fetchDataStart('popular').then(data => {
        this.setState({
          movieCardsState: data
          });
    });
  }
  searchByName = query => {
    fetchDataName(query).then(data => {
        this.setState({
          movieCardsState: data
          });
    });
  }
  searchByCategory = query => {
    fetchDataStart(query).then(data => {
        this.setState({
          movieCardsState: data
        });
    });
  }
  addMovieCard = (cards) => {
    const addCard = cards;

    if (this.state.watchlist.every(film => film.id !== addCard.id)) {
      this.setState({
        watchlist: [...this.state.watchlist, addCard]
      });
    }
    else {
      alert ("Movie is already added");
    }
  }


  deleteMovieCard = (id) => {
    this.setState({
      watchlist: this.state.watchlist.filter(card => card.id !== id)
    })
  }

    render() {
      const { movieCardsState, watchlist } = this.state;
      localStorage.setItem('localStorFilm', JSON.stringify(this.state.watchlist));
      return (
        <div className="App">
          <Header text="Movie Mate"/>
          <AppBody>
            <Sidebar>
              <Form getMovies={this.searchByName} />
              <SearchCategories onSetSearchValues={this.searchByCategory}/>
              <WatchList watchlist={watchlist} DeleteCardProps={this.deleteMovieCard} />
            </Sidebar>
            <MovieList movieCardsProps={movieCardsState}  AddCardProps={this.addMovieCard} />
          </AppBody>
        </div>
      );
    }
  }

export default App;