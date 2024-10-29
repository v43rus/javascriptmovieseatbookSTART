import React from "react";

function Book() {
    return (
        <div className="container">
            <p className="text">
                You have selected <span id="count">0</span> seats for a price of $<span
                id="total">0</span>
            </p>
            <button className="book-btn"><b>Book</b></button>
        </div>
    );
}

export default Book;