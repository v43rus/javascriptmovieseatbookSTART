import React from 'react';
// import React, { useEffect, useState } from 'react';
import './styles/style.css';

function App() {
  /*
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('./movies.json')
      .then(response => response.json())
      .then(data => setMovies(data))
      .catch(error => console.error('Error fetching movies:', error));
  }, []);
  */
  
  return (
    <div className="app">
      <header className="App-header">
        <h1>Hello, world!</h1>  
      </header>
    </div>
  );
}

export default App;