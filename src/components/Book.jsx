import React from "react";
import PropTypes from 'prop-types';

function Book({ reservedSeats, ticketPrice, isFormVisible, setIsFormVisible }) {
    function handleBook() {
        if (!isFormVisible)
            setIsFormVisible(true);
    }

    return (
        <div className="container">
            { /* Ticket Text */ }
            {ticketPrice === 0 && <p className="text">Please select a movie to book seats</p>}
            {ticketPrice !== 0 && reservedSeats > 0 && <p className="text">You have selected <span id="count">{reservedSeats} </span>
                seats(s) for a price of $<span id="total">{ticketPrice && (ticketPrice * reservedSeats)}</span></p>}
            {ticketPrice !== 0 && reservedSeats === 0 && <p className="text">Please select your seat(s)</p>}
    
            { /* Book Button */ }
            <div className="btn-container">
                {ticketPrice !== 0 && reservedSeats > 0 && <button className="book-btn" onClick={handleBook}><b>Book</b></button>}
            </div>
        </div>
    );
}
Book.propTypes = {
    reservedSeats: PropTypes.number.isRequired,
    ticketPrice: PropTypes.number.isRequired,
    isFormVisible: PropTypes.bool.isRequired,
    setIsFormVisible: PropTypes.bool.isRequired,
};

export default Book;
