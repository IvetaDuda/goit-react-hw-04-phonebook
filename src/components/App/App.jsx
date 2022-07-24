import { useState, useEffect } from 'react';

import ContactForm from '../ContactForm';
import ContactList from '../ContactList';
import Filter from '../Filter';
import Message from '../Message';

import { Container, Title, SubTitle } from './App.styled';

const contsctsList = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const App = () => {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem('contacts')) ?? contsctsList;
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const formSubmitHendel = data => {
    const contactNames = contacts.map(contact => contact.name);

    if (contactNames.includes(data.name)) {
      alert(`${data.name} is already in contacts.`);
    } else {
      setContacts([data, ...contacts]);
    }
  };

  const deleteContacts = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  const changeFilter = event => {
    const { value } = event.target;
    setFilter(value);
  };

  const filterContact = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  const filterdContact = filterContact();
  return (
    <>
      <Container>
        <Title>Phonebook</Title>
        <ContactForm onSubmitForm={formSubmitHendel} />
        <SubTitle>Contacts</SubTitle>
        <Filter onFilter={changeFilter} />
        {contacts.length === 0 ? (
          <Message />
        ) : (
          <ContactList contacts={filterdContact} onDelete={deleteContacts} />
        )}
      </Container>
    </>
  );
};

export default App;
