import React from 'react';
import { ContactPicker } from '../contactPicker/ContactPicker';

import './AppointmentForm.css';

const getTodayString = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = (today.getMonth() + 1).toString().padStart(2, '0'); // Month is zero-based
  const day = today.getDate().toString().padStart(2, '0');

  return `${year}-${month}-${day}`;
};

export const AppointmentForm = ({
  contacts,
  name,
  setName,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit,
}) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input type="text" name="title" value={name} onChange={(e) => setName(e.target.value)} />
        <label htmlFor="contact">Contact:</label>
        <ContactPicker
          contacts={contacts}
          value={contact}
          onChange={(e) => setContact(e.target.value)}
        />
        <label htmlFor="date">Date:</label>
        <input
          type="date"
          name="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          min={getTodayString()}
        />
        <label htmlFor="time">Time:</label>
        <input type="time" name="time" value={time} onChange={(e) => setTime(e.target.value)} />
        <button className="button-3" type="submit">
          Submit
        </button>
      </form>
    </>
  );
};
