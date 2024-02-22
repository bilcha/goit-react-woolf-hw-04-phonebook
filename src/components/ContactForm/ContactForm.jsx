import { useState } from 'react';
import { nanoid } from 'nanoid';

import styles from './ContactForm.module.css';

const ContactForm = ({ addContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    addContact({ name, number, id: nanoid() });
    setName('');
    setNumber('');
  }
  function handleChange({ target: { name, value } }) {
    if (name === 'name') {
      setName(value);
    } else {
      setNumber(value);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="nameField">Name</label>
        <input
          className={styles.inputField}
          id="nameField"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="phoneField">Number</label>
        <input
          className={styles.inputField}
          id="phoneField"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleChange}
        />
      </div>

      <button className={styles.button} type="submit">
        Add contact
      </button>
    </form>
  );
};
export default ContactForm;
