 export function fetchDataStart(query) {
    return fetch(`https://api.themoviedb.org/3/movie/${query}?api_key=84017091cef4bdf727194c28229ff1ba`)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Error while fetching ' + response.statusText)
    })
    .then(data => {
      const movies = data.results.map(movie => ({
        id: movie.id,
        title: movie.title,
        text: movie.overview.slice(0,150) + '...',
        rating: movie.vote_average,
        release: movie.release_date.slice(0,4),
        poster: 'https://image.tmdb.org/t/p/w400' + movie.poster_path
      }));
      console.log(data);
      return movies;
    })
    .catch(err => console.error(err));
  }


export function fetchDataName(query) {
     return fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=84017091cef4bdf727194c28229ff1ba&query=${query}`)
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          throw new Error('Error while fetching ' + response.statusText)
        })
        .then(data => {
          const movies = data.results.map(movie => ({
            id: movie.id,
            title: movie.title,
            text: movie.overview.slice(0,150) + '...',
            rating: movie.vote_average,
            release: movie.release_date.slice(0,4),
            poster: 'https://image.tmdb.org/t/p/w500' + movie.poster_path
          }));

          return movies;
        })
        .catch(err => console.error(err));
    
  }