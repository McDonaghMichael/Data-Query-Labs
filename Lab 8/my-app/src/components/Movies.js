import React from 'react';
import MovieItem from './MovieItem';

const Movies = (props) => {

  console.log("Props");
  console.log(props.movieData);
    // Loops through each of the movies in the array and creates a MovieItem for them
    return props.movieData.map((movie) => (

        
        // MovieItem is called and each of the movies data is passed into the object
        <MovieItem data={movie} key={movie._id} />
      ));
}

export default Movies;