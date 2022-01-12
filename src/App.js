import React, { Component } from 'react';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import styles from './App.css';
import { MyPhonebook, Header, SecondHeader } from './App.styled';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  handleSubmit = newContact => {
    const { id, name, number } = newContact;

    this.setState(prevState => ({
      contacts: [...prevState.contacts, { id, name, number }],
    }));
  };

  getVisibleContacts = () => {
    const value = this.state.filter;
    return this.state.contacts.filter(el => el.name.toLowerCase().includes(value.toLowerCase()));
  };

  changeInput = evt => {
    this.setState({ filter: evt.target.value });
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(el => el.id !== id),
    }));
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const { contacts, filter } = this.state;

    return (
      <>
        <MyPhonebook>
          <Header>My phonebook</Header>
          <ContactForm onSubmit={this.handleSubmit} contacts={contacts} />
          <Filter value={filter} onChange={this.changeInput} />
          <SecondHeader>My contacts:</SecondHeader>
          <ContactList contacts={this.getVisibleContacts()} onDelete={this.deleteContact} />
        </MyPhonebook>
      </>
    );
  }
}

export default App;
