import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

function MovieContainer( { setTicketPrice } ) {
    const [movies, setMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [filmstaden, setFilmstaden] = useState(null);

    useEffect(() => {
        fetch('./javascriptmovieseatbookSTART/movies.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                if (response.headers.get('content-type')?.includes('application/json')) {
                    return response.json();
                } else {
                    throw new Error('Response is not JSON');
                }
            })
            .then(data => setMovies(data))
            .catch(error => console.error('Error fetching movies:', error));
        
            fetch('./javascriptmovieseatbookSTART/posters/filmstaden.jpg')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                if (response.headers.get('content-type')?.includes('image')) {
                    return response.blob();
                } else {
                    throw new Error('Response is not an image');
                }
            })
            .then(imageBlob => {
                const imageObjectURL = URL.createObjectURL(imageBlob);
                setFilmstaden(imageObjectURL);
            })
            .catch(error => console.error('Error fetching filmstaden image:', error));
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
            {selectedMovie == null && ( <img src={filmstaden} alt="Filmstaden" id="movie-poster" />)}

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