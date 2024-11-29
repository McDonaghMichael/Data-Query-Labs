import {React, useEffect, useState} from 'react';
import Movies from './Movies';
import Axios from 'axios';

const Read = () => {

  // The array of movie data is stored in this state and will be retreived from here
  const [movies, setMovies] = useState([]);

  const Reload = () => {
        console.log("Reloading movie data...");
        Axios.get('http://localhost:4000/api/movies')
            .then((response) => {
                setMovies(response.data);
            })
            .catch((error) => {
                console.error("Error reloading data:", error);
            });
    };

    useEffect(() => {
        Reload();
    }, []);

  // useEffect is used when fetching data as it will be rendering into one of our components
  useEffect(() => {

  // Axios uses httpClient and fetchs the JSON from the website
    Axios.get("http://localhost:4000/api/movies")

      // Once a response is retreieved it will then be used below
      .then((response) => {

        // The array of movies will now be stored in the movies state using the state method below
        setMovies(response.data);
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
            <Movies movieData={movies} ReloadData={Reload}/>
        </div>
    );
}

export default Read;