import React, { Component } from 'react';

import ContactForm from './components/ContactForm/ContactForm.js';
import Filter from './components/Filter/Filter.js';
import ContactList from './components/ContactList/ContactList.js';
import classes from './App.module.css';
import './bases.css';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  addContacts = el => {
    if (this.state.contacts.find(item => item.name === el.name)) {
      alert(`${el.name} is already in contacts.`);
    } else {
      this.setState(prevState => {
        const updateState = [...prevState.contacts, el];
        return { contacts: updateState };
      });
    }
  };

  handleFilter = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contactItem =>
      contactItem.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  handleDelete = id => {
    const { contacts } = this.state;
    const obj = contacts.find(el => el.id === id);
    const index = contacts.indexOf(obj);
    this.setState(prevState => ({
      contacts: [
        ...prevState.contacts.slice(0, index),
        ...prevState.contacts.slice(index + 1),
      ],
    }));
  };

  filterRender = filter => {
    this.setState({ filter }); // ?
  };
  render() {
    const { filter, contacts } = this.state;
    const visibleContact = this.handleFilter();
    return (
      <>
        <div className={classes.conteiner}>
          <ContactForm addContacts={this.addContacts} />
          {contacts.length > 1 && (
            <Filter filter={filter} filterRender={this.filterRender} />
          )}
          <ContactList array={visibleContact} deleteItem={this.handleDelete} />
        </div>
      </>
    );
  }
}
export default App;
