import React from 'react';

import './ContactForm.css';

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhoneNumber,
  email,
  setEmail,
  handleSubmit,
}) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input name="name" type="text" value={name} onChange={(e) => setName(e.target.value)} />

        <label htmlFor="phone">Phone (10 digits):</label>
        <input
          type="text"
          name="phone"
          value={phone}
          onChange={(e) => setPhoneNumber(e.target.value)}
          pattern="[0-9]{10}" // You can adjust the pattern to your preferred phone locale
        />

        <label htmlFor="email">Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

        <button className="button-3" type="submit">
          Submit
        </button>
      </form>
    </>
  );
};
