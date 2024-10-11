import React from 'react';
import MovieItem from './MovieItem';

const Movies = (props) => {
    return props.movieData.map((movie) => (
        <MovieItem data={movie} key={movie.imdbID} />
      ));
}

export default Movies;