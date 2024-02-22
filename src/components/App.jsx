import { useEffect, useState } from 'react';
import ContactForm from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');
  const [filteredContacts, setFilteredContacts] = useState([]);

  useEffect(() => {
    const localStorageData = localStorage.getItem('contacts');
    if (localStorageData && JSON.parse(localStorageData).length > 0) {
      setContacts(JSON.parse(localStorageData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  useEffect(() => {
    const filtered = contacts.filter(el => {
      return el.name.toLowerCase().includes(filter);
    });
    setFilteredContacts(filtered);
  }, [filter, contacts]);

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
        contactList={filteredContacts}
        deleteContact={deleteContact}
      />
    </div>
  );
};

export default App;
