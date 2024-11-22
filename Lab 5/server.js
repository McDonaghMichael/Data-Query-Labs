const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;


// Use body-parser middleware to parse URL-encoded data from forms
app.use(bodyParser.urlencoded({ extended: true }));

// Define a GET route for the root URL ('/')
// This route sends a welcome message when the root is accessed
app.get('/', (req, res) => {
    res.send('Welcome to Data Representation & Querying');
});

// Define a GET route for '/index'
// This route serves the 'index.html' file located in the root directory
app.get('/index', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Serve static files from the 'public' directory
// This middleware allows files in the 'public' directory to be accessible via URLs
app.use(express.static('public'));

// Start the server and listen on the specified port
// Log a message to the console when the server is running
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

// Error-handling middleware to catch and handle server errors
// Logs the error and sends a generic 500 status message if an error occurs
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

// Define a dynamic GET route '/hello/:name/:surname'
// Extracts 'name' and 'surname' parameters from the URL and sends a greeting
app.get('/hello/:name/:surname', (req, res) => {
    const name = req.params.name;
    const surname = req.params.surname;
    res.send(`Hello ${name} ${surname}`);
});

// Define a GET route '/name' with query parameters
// Extracts 'firstname' and 'lastname' from the query string and sends a greeting
app.get('/name', (req, res) => {
    const firstname = req.query.firstname;
    const lastname = req.query.lastname;
    res.send(`Hello ${firstname} ${lastname}`);
});

// Define a POST route '/name' to handle form data submissions
// Extracts 'firstname' and 'lastname' from the body of the request and sends a greeting
app.post('/name', (req, res) => {
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    res.send(`Hello ${firstname} ${lastname}`);
});

// Define a GET route '/api/movies' to retrieve a list of movies in JSON format
// Sends a hard-coded list of movie objects with various details as JSON response
app.get('/api/movies', (req, res) => {
    const movies = [
        {
            "Title": "Avengers: Infinity War",
            "Year": "2018",
            "imdbID": "tt4154756",
            "Type": "movie",
            "Poster": "https://example.com/poster1.jpg"
        },
        {
            "Title": "Captain America: Civil War",
            "Year": "2016",
            "imdbID": "tt3498820",
            "Type": "movie",
            "Poster": "https://example.com/poster2.jpg"
        },
        {
            "Title": "World War Z",
            "Year": "2013",
            "imdbID": "tt0816711",
            "Type": "movie",
            "Poster": "https://example.com/poster3.jpg"
        }
    ];
    // Set HTTP status to 201 Created and respond with the movie list in JSON format
    res.status(201).json({ myMovies: movies });
});