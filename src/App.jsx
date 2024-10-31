import React, { useState } from 'react'
import './styles/style.css';
import MovieContainer from './components/MovieContainer';
import Showcase from './components/Showcase.jsx';
import SeatBooking from './components/SeatBooking.jsx';
import Book from './components/Book.jsx';
import FormikForm from './components/FormikForm.jsx';

function App() {
  const [reservedSeats, setReservedSeats] = useState(0);
  const [ticketPrice, setTicketPrice] = useState(0);
  const [isFormVisible, setIsFormVisible] = useState(false);
  
  return (
    <div className="app">
      <FormikForm isFormVisible={isFormVisible} setIsFormVisible={setIsFormVisible}/>
      <MovieContainer setTicketPrice={setTicketPrice}/>
      <Showcase />
      <SeatBooking setReservedSeats={setReservedSeats} />
      <Book reservedSeats={reservedSeats} ticketPrice={ticketPrice} formIsVisible={isFormVisible} setIsFormVisible={setIsFormVisible} />
    </div>
  );
}

export default App;