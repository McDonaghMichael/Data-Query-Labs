import {React, useEffect} from 'react';
import Movies from './Movies';
import Axios from 'axios';





const Read = () => {

  const data = [];

  useEffect(() => {
    Axios.get("https://jsonblob.com/api/jsonblob/1287718524221775872")
    .then((response) => {
      response.data.movies.forEach(element => {
        data.push(element);
        
      });
    })
    .catch();
  })

  console.log(data);


    return (
        <div>
            <h3>
                Hello from read component
            </h3>
            <Movies movieData={data}/>
        </div>
    );
}

export default Read;