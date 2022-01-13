import { useState, useEffect } from 'react';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import styles from './App.css';
import { MyPhonebook, Header, SecondHeader } from './App.styled';
import { nanoid } from 'nanoid';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  const addContact = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    setContacts(prevContacts => [contact, ...prevContacts]);
  };

  const getVisibleContacts = () => {
    const value = filter;
    return contacts.filter(el => el.name.toLowerCase().includes(value.toLowerCase()));
  };

  const changeFilter = evt => {
    setFilter(evt.target.value);
  };

  const deleteContact = id => {
    setContacts(prevContacts => prevContacts.filter(contact => contact.id !== id));
  };

  useEffect(() => {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      setContacts(parsedContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  });

  return (
    <>
      <MyPhonebook>
        <Header>My phonebook</Header>
        <ContactForm onSubmit={addContact} contacts={contacts} />
        <Filter value={filter} onChange={changeFilter} />
        <SecondHeader>My contacts:</SecondHeader>
        <ContactList contacts={getVisibleContacts()} onDelete={deleteContact} />
      </MyPhonebook>
    </>
  );
};

export default App;
