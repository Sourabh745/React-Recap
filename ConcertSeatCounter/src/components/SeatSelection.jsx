import React, { useState } from "react";

const SeatSelection = () => {
  const [selectedSeats, setSelectedSeats] = useState([]); // Track selected seats

  const rows = 5;
  const cols = 5;

  const handleSeatClick = (seat) => {
    // Check if seat is already selected
    if (selectedSeats.includes(seat)) {
      // Deselect seat
      setSelectedSeats(selectedSeats.filter((s) => s !== seat));
    } else if (selectedSeats.length < 5) {
      // Select seat if max limit not reached
      setSelectedSeats([...selectedSeats, seat]);
    } else {
      alert("You can select up to 5 seats only.");
    }
  };

  return (
    <div style={{ display: "grid", gridTemplateColumns: `repeat(${cols}, 1fr)`, gap: "10px", maxWidth: "200px" }}>
      {[...Array(rows * cols)].map((_, index) => {
        const seat = index + 1; // Seat identifier
        const isSelected = selectedSeats.includes(seat);

        return (
          <button
            key={seat}
            onClick={() => handleSeatClick(seat)}
            style={{
              padding: "10px",
              backgroundColor: isSelected ? "green" : "gray",
              color: "white",
              border: "none",
              cursor: "pointer",
            }}
          >
            {seat}
          </button>
        );
      })}
    </div>
  );
};

export default SeatSelection;
