import { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  componentDidMount = () => {
    const localStorageData = localStorage.getItem('contacts');
    if (localStorageData && JSON.parse(localStorageData).length > 0) {
      this.setState({ contacts: JSON.parse(localStorageData) });
    }
  };
  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.contacts.length !== this.state.contacts.length) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  };
  addContact = newData => {
    if (
      this.state.contacts.find(
        item => item.name.toLowerCase() === newData.name.toLowerCase()
      )
    ) {
      alert(`${newData.name} is already in contacts.`);
    } else {
      this.setState(prev => ({
        contacts: [newData, ...prev.contacts],
      }));
    }
  };

  addFilter = e => {
    const filterSymbols = e.target.value.toLowerCase();
    this.setState({ filter: filterSymbols });
  };
  getFilteredItems = () => {
    return this.state.contacts.filter(el => {
      return el.name.toLowerCase().includes(this.state.filter);
    });
  };
  deleteContact = id => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(el => el.id !== id),
    }));
  };

  render() {
    const filteredContacts = this.getFilteredItems();
    return (
      <div
        style={{
          color: '#010101',
          padding: '20px',
        }}
      >
        <h1>Phonebook</h1>
        <ContactForm
          addContact={this.addContact}
          contacts={this.state.contacts}
        />
        <h2>Contacts</h2>
        <Filter addFilter={this.addFilter} />
        <ContactList
          contactList={filteredContacts}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
export default App;
