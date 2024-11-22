
import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function Edit(props) {

    // Retrieves the :id from the url
    let { id } = useParams();

    const [title, setTitle] = useState("");
    const [year, setYear] = useState("");
    const [poster, setPoster] = useState("");
    const navigate = useNavigate();

    // useEffect is used to handle http requests on our website
    useEffect(() => {

        // Uses our Express RESTFUL API to get the movie information based on the id param
        axios.get('http://localhost:4000/api/movie/' + id)
            .then((response) => {

                // Sets the movie information
                setTitle(response.data.title);
                setYear(response.data.year);
                setPoster(response.data.poster);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [id]);

    // This function gets ran when the form is submitted
    const handleSubmit = (event) => {
        event.preventDefault(); // Prevents default submission
        const newMovie = { id, title, year, poster }; // Crates a movie object
        
        // This will request the express server api to update the movie information with the data passed
        axios.put('http://localhost:4000/api/movie/' + id, newMovie)
            .then((res) => {
                console.log(res.data);
                navigate('/read'); // Return to the read page
            });
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Movie Title: </label>
                    <input type="text" 
                    className="form-control" 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Release Year: </label>
                    <input type="text" 
                    className="form-control" 
                    value={year} 
                    onChange={(e) => setYear(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Poster URL: </label>
                    <input type="text" 
                    className="form-control" 
                    value={poster} 
                    onChange={(e) => setPoster(e.target.value)} />
                </div>
                <div className="form-group">
                    <input type="submit" value="Edit Movie" className="btn btn-primary" />
                </div>
            </form>
        </div>
    );
    }