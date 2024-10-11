import React from 'react';


const Movies = (props) => {
    return (
        <div>
            <h3>
                Hello from movies component
            </h3>
            {console.log(props.movieData)}
        </div>
    );
}

export default Movies;