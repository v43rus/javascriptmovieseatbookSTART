import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

function MovieContainer( { setTicketPrice } ) {
    const [movies, setMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await fetch('https://gist.githubusercontent.com/v43rus/07f1f2339fd8353be8eac2677f45114a/raw/4779f30ea9687106798c8c007bf7caad9a9fda80/movies.json');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setMovies(data);
            } catch (error) {
                console.error('Error fetching movies:', error);
            }
        };
        fetchMovies();
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
            {selectedMovie == null && ( <img src="https://i.ibb.co/kqYcDx1/filmstaden.jpg" alt="Filmstaden" id="movie-poster" />)}

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
MovieContainer.propTypes = {
    setTicketPrice: PropTypes.func.isRequired,
};

export default MovieContainer;