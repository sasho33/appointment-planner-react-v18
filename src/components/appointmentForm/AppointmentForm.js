import React from 'react';
import { ContactPicker } from '../contactPicker/ContactPicker';

import './AppointmentForm.css';

const getTodayString = () => {
  const [month, day, year] = new Date().toLocaleDateString('en-US').split('/');
  return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
};

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
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
        <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
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
          min={getTodayString}
        />
        <label htmlFor="time">Time:</label>
        <input type="text" name="time" value={time} onChange={(e) => setTime(e.target.value)} />
        <button className="button-3" type="submit">
          Submit
        </button>
      </form>
    </>
  );
};
