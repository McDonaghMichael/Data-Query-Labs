import { useState } from "react";
import axios from "axios";

function Create() {

    // Each state below is used to set and get the movie details (title, year & poster)
    const [title, setTitle] = useState('');
    const [year, setYear] = useState('');
    const [poster, setPoster] = useState('');


    // Arrow method that will output the values from the form
    const formSubmission = (e) => {
        e.preventDefault();
        console.log(title);
        console.log(year);
        console.log(poster);

        const movie = {
            title: title,
            year: year,
            poster: poster
          };
          
          axios.post('http://localhost:4000/api/movies', movie)
            .then((res) => console.log(res.data))
            .catch((err) => console.log(err.data));
    }

    // Returns the form to submit new movie requests
    return (
        <div>
        <h2>This is my Create Component.</h2>
        <form onSubmit={formSubmission}>
            <div className="form-group">
            <label>Add Movie Title: </label>
            <input type="text"
                className="form-control"
                value={title}
                onChange={(e) => { setTitle(e.target.value) }}
            />
            <label>Add Movie Year: </label>
            <input type="number"
                className="form-control"
                value={year}
                onChange={(e) => { setYear(e.target.value) }}
            />
            <label>Add Movie Poster: </label>

            <input type="text"
                className="form-control"
                value={poster}
                onChange={(e) => { setPoster(e.target.value) }}
            />
            </div>
            <input type="submit" value="Add Movie" />
        </form>
        </div>
    );
}

export default Create;