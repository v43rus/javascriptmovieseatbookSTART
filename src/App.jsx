import React from 'react'
import './styles/style.css';
import MovieContainer from './components/MovieContainer';
import Showcase from './components/Showcase.jsx';
import SeatBooking from './components/SeatBooking.jsx';
import Book from './components/Book.jsx';

// eslint-disable-next-line no-unused-vars
import script from './script.js';




function App() {

  
  return (
    <div className="app">
      <MovieContainer />
      <Showcase />
      <SeatBooking />
      <Book />
    </div>
  );
}

export default App;