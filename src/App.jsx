import React, { useState } from 'react'
import './styles/style.css';
import MovieContainer from './components/MovieContainer';
import Showcase from './components/Showcase.jsx';
import SeatBooking from './components/SeatBooking.jsx';
import Book from './components/Book.jsx';

function App() {
  const [reservedSeats, setReservedSeats] = useState(0);
  const [ticketPrice, setTicketPrice] = useState(0);
  
  return (
    <div className="app">
      <MovieContainer setTicketPrice={setTicketPrice}/>
      <Showcase />
      <SeatBooking setReservedSeats={setReservedSeats} />
      <Book reservedSeats={reservedSeats} ticketPrice={ticketPrice} />
    </div>
  );
}

export default App;