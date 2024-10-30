import React, { useEffect, useState } from 'react';

function MovieContainer( { ticketPrice, setTicketPrice } ) {
    const [movies, setMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(1);

    useEffect(() => {
        fetch('movies.json')
            .then(response => response.json())
            .then(data => setMovies(data))
            .catch(error => console.error('Error fetching movies:', error));
    }, []);

    const handleMovieChange = (event) => {
        const selectedMovieId = event.target.value;
        if (!selectedMovieId) {
            setSelectedMovie(null);
            setTicketPrice(0);
            return;
        }
        const movie = movies.find(movie => movie.Id == selectedMovieId);
        setSelectedMovie(movie);
        setTicketPrice(movie.Price);
    };

    return (
        <div className="movie-container">
            {selectedMovie && (<img src={selectedMovie.Poster} alt={selectedMovie.Title} id="movie-poster"/>)}

            <label htmlFor="movie">Pick a movie:</label>
            <select name="movie" id="movie" onChange={handleMovieChange}>
                <option value="">Select a movie</option>
                {movies.map(movie => (
                    <option key={movie.Id} value={movie.Id}>{movie.Title} ({movie.Price})</option>
                ))}
            </select>
        </div>
    );
}

export default MovieContainer;