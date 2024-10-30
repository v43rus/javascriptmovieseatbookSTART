import React, { useEffect } from "react";
import PropTypes from 'prop-types';

function SeatBooking({ setReservedSeats }) {
    useEffect(() => {
        const emptySeats = document.querySelectorAll('.row .seat:not(.occupied)');
        
        const handleSeatClick = (event) => {
            event.target.classList.toggle('selected');
            const selectedSeats = document.querySelectorAll('.row .seat.selected').length;
            setReservedSeats(selectedSeats);
        };

        emptySeats.forEach(seat => seat.addEventListener('click', handleSeatClick));
    }, [setReservedSeats]);

    return (
        <div className="container">
            <div className="screen"></div>
            <div className="row">
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
            </div>
            <div className="row">
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat occupied"></div>
                <div className="seat occupied"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
            </div>
            <div className="row">
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat occupied"></div>
                <div className="seat occupied"></div>
            </div>
            <div className="row">
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
            </div>
            <div className="row">
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat occupied"></div>
                <div className="seat occupied"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
            </div>
            <div className="row">
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat occupied"></div>
                <div className="seat occupied"></div>
                <div className="seat occupied"></div>
                <div className="seat"></div>
            </div>
        </div>
    );
}
SeatBooking.propTypes = {
    setReservedSeats: PropTypes.func.isRequired,
};

export default SeatBooking;
