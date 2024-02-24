import { useEffect, useState } from 'react';
import ContactForm from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('contacts')) || []
  );

  const [filter, setFilter] = useState('');
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const getFilteredItems = () => {
    return contacts.filter(el => {
      return el.name.toLowerCase().includes(filter);
    });
  };

  function addContact(newData) {
    if (
      contacts.find(
        item => item.name.toLowerCase() === newData.name.toLowerCase()
      )
    ) {
      alert(`${newData.name} is already in contacts.`);
    } else {
      setContacts(prev => [newData, ...prev]);
    }
  }

  function addFilter(e) {
    setFilter(e.target.value.toLowerCase());
  }

  function deleteContact(id) {
    setContacts(prev => prev.filter(el => el.id !== id));
  }

  return (
    <div
      style={{
        color: '#010101',
        padding: '20px',
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} contacts={contacts} />
      <h2>Contacts</h2>
      <Filter addFilter={addFilter} />
      <ContactList
        contactList={getFilteredItems()}
        deleteContact={deleteContact}
      />
    </div>
  );
};

export default App;
