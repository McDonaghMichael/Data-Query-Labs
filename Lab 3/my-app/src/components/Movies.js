import React from 'react';
import MovieItem from './MovieItem';

const Movies = (props) => {

    // Loops through each of the movies in the array and creates a MovieItem for them
    return props.movieData.map((movie) => (
        
        // MovieItem is called and each of the movies data is passed into the object
        <MovieItem data={movie} key={movie.imdbID} />
      ));
}

export default Movies;