import {React, useEffect, useState} from 'react';
import Movies from './Movies';
import Axios from 'axios';

const Read = () => {

  // The array of movie data is stored in this state and will be retreived from here
  const [movies, setMovies] = useState([]);

  // useEffect is used when fetching data as it will be rendering into one of our components
  useEffect(() => {

  // Axios uses httpClient and fetchs the JSON from the website
    Axios.get("https://jsonblob.com/api/jsonblob/1287718524221775872")

      // Once a response is retreieved it will then be used below
      .then((response) => {

        // The array of movies will now be stored in the movies state using the state method below
        setMovies(response.data.movies);
      })

      // In the event of an error occuring the code below will catch it adn log it to console
      .catch((error) => {
        console.log(error);
      });

      // If nothing is retrieved it will return an empty array
    }, []);

    return (
        <div>
            <h3>
                Hello from read component
            </h3>
            <Movies movieData={movies}/>
        </div>
    );
}

export default Read;