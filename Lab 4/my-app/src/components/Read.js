import {React, useEffect, useState} from 'react';
import Movies from './Movies';
import Axios from 'axios';


const Read = () => {

  const [movies, setMovies] = useState([]);

  useEffect(() => {

  // Axios uses httpClient and fetchs the JSON from the website
    Axios.get("https://jsonblob.com/api/jsonblob/1287718524221775872")
      .then((response) => {
        setMovies(response.data.movies);
      })
      .catch((error) => {
        console.log(error);
      });
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