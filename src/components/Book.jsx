import React from "react";

function Book({ reservedSeats, ticketPrice }) {
    return (
        <div className="container">
            { /* Ticket Text */ }
                {ticketPrice === 0 && <p className="text">Please select a movie to book seats</p>}
                {ticketPrice !== 0 && reservedSeats > 0 &&<p className="text">You have selected <span id="count">{reservedSeats} </span>
                seats(s) for a price of $<span id="total">{ticketPrice && (ticketPrice * reservedSeats)}</span></p>}
                {ticketPrice !== 0 && reservedSeats === 0 && <p className="text">Please select your seat(s)</p>}
    
            { /* Book Button */ }
            {ticketPrice !== 0 && reservedSeats > 0 && <button className="book-btn"><b>Book</b></button>}
        </div>
    );
}

export default Book;