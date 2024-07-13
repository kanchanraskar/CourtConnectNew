import React, { useState } from 'react';
import './BookTurf.css'; // Import the CSS file for styles

const BookTurf = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleTimeChange = (e) => {
    setSelectedTime(e.target.value);
  };

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform booking logic here (e.g., API call, state update)
    console.log('Booking submitted:', { selectedDate, selectedTime, fullName, email });
    // Reset form fields
    setSelectedDate('');
    setSelectedTime('');
    setFullName('');
    setEmail('');
  };

  return (
    <div className="book-turf">
      <h2>Book Turf</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="date">Date:</label>
        <input type="date" id="date" value={selectedDate} onChange={handleDateChange} required />

        <label htmlFor="time">Time:</label>
        <input type="time" id="time" value={selectedTime} onChange={handleTimeChange} required />

        <label htmlFor="fullName">Full Name:</label>
        <input type="text" id="fullName" value={fullName} onChange={handleFullNameChange} required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={handleEmailChange} required />

        <button type="submit">Book Now</button>
      </form>
    </div>
  );
};

export default BookTurf;