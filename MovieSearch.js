import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MovieSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Fetch movie data when the component mounts
    fetchMovies();
  }, []);

  useEffect(() => {
    // Fetch movie data whenever the search term changes
    fetchMovies();
  }, [searchTerm]);

  const fetchMovies = async () => {
    try {
      const response = await axios.get(
        `http://www.omdbapi.com/?s=${searchTerm}&apikey=YOUR_API_KEY`
      );
      setMovies(response.data.Search || []);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    fetchMovies();
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchInputChange}
          placeholder="Search movies..."
        />
        <button type="submit">Search</button>
      </form>
      <MovieList movies={movies} />
    </div>
  );
};

const MovieList = ({ movies }) => {
  return (
    <div>
      {movies.map((movie) => (
        <div key={movie.imdbID}>
          <h2>{movie.Title}</h2>
          <p>{movie.Year}</p>
        </div>
      ))}
    </div>
  );
};

export default MovieSearch;


