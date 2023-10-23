import React from 'react';

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
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>

        <label>
          Phone:
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhoneNumber(e.target.value)}
            pattern="[0-9]{10}" // You can adjust the pattern to your preferred phone locale
          />
        </label>

        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>

        <button type="submit">Submit</button>
      </form>
    </>
  );
};
