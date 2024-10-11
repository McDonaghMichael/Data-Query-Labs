import React from 'react';
import MovieItem from './MovieItem';

const Movies = (props) => {
    return props.movieData.forEach(function(movie) {
                <MovieItem data={movie}/>
            });
}

export default Movies;