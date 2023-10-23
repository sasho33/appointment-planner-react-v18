import React, { useState, useEffect } from 'react';

import { ContactForm } from '../../components/contactForm/ContactForm';
import { TileList } from '../../components/tileList/TileList';

export const ContactsPage = ({ contacts, addContact }) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [dublicateCheck, setDublicateCheck] = useState(false);

  useEffect(() => {
    // Check for duplicate names
    const isDublicate = contacts.some((contact) => contact.name === name);
    setDublicateCheck(isDublicate);
  }, [name, contacts]);

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
    if (!dublicateCheck) {
      addContact(name, phoneNumber, email);
    } else {
      alert('Duplicate contact');
    }
    setName('');
    setEmail('');
    setPhoneNumber('');
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm
          name={name}
          phoneNumber={phoneNumber}
          email={email}
          setName={setName}
          setPhoneNumber={setPhoneNumber}
          setEmail={setEmail}
          handleSubmit={handleSubmit}
          duplicateCheck={dublicateCheck}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList data={contacts} />
      </section>
    </div>
  );
};
