const express = require('express'); 
const bodyParser = require('body-parser'); 
const cors = require('cors'); 

// Connect to MongoDB database using Mongoose
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:ThisIsMyAdminPassword@cluster0.wha9n.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

// Define the schema for movies
const movieSchema = new mongoose.Schema({
  title: String, // Movie title
  year: String, // Release year of the movie
  poster: String // URL of the movie poster
});

// Create a Mongoose model for movies based on the schema
const Movie = mongoose.model('Movie', movieSchema);

// Initialize the Express app
const app = express();
const port = 4000; // Port on which the server will run

// Use middleware to handle JSON and URL-encoded data
app.use(bodyParser.urlencoded({ extended: true })); // Parses URL-encoded bodies
app.use(bodyParser.json()); // Parses JSON bodies

// Base route to check if the server is running
app.get('/', (req, res) => {
    res.send('Server');
});

// Start the server and listen on the defined port
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

// Enable CORS for all routes
app.use(cors());

// Manually set headers to allow CORS for specific requests
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // Allow all origins
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS"); // Allow specific HTTP methods
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"); // Allow specific headers
  next(); // Pass control to the next middleware
});

// Route to create a new movie (POST request)
app.post('/api/movies', async (req, res) => {
  // Destructure title, year, and poster from the request body
  const { title, year, poster } = req.body;

  // Create a new movie document using the Movie model
  const newMovie = new Movie({ title, year, poster });
  
  // Save the new movie to the database
  await newMovie.save();

  // Respond with a success message and the created movie
  res.status(201).json({ message: 'Movie created successfully', movie: newMovie });
});

// Route to fetch all movies (GET request)
app.get('/api/movies', async (req, res) => {
  // Retrieve all movies from the database
  const movies = await Movie.find({});
  
  // Respond with the list of movies
  res.json(movies);
});

// Route to fetch a single movie by its ID (GET request)
app.get('/api/movie/:id', async (req, res) => {
  // Retrieve the movie with the specified ID from the database
  const movie = await Movie.findById(req.params.id);
  
  // Respond with the movie details
  res.send(movie);
});
