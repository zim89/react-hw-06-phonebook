import React, { useState, useEffect, useRef } from 'react';
import { nanoid } from 'nanoid';
import { ToastContainer, toast } from 'react-toastify';
import AddContactForm from 'components/AddContactForm/AddContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { Section, Container, Title, Accent } from './Styled';
import 'react-toastify/dist/ReactToastify.min.css';

const LS_KEY = 'contactList';
const INIT_VALUES = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export default function App() {
  const [contacts, setContacts] = useState(INIT_VALUES);
  const [filter, setFilter] = useState('');
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      const savedState = JSON.parse(localStorage.getItem(LS_KEY));
      !savedState
        ? localStorage.setItem(LS_KEY, JSON.stringify(contacts))
        : setContacts([...savedState]);
      isFirstRender.current = false;
      return;
    }
    localStorage.setItem(LS_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const addContact = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    const isIncludeName = contacts.some(
      value => value.name.toLowerCase() === name.toLowerCase()
    );
    const isIncludeNumber = contacts.some(
      value =>
        value.number.replace('+', '').split('-').join('') ===
        number.replace('+', '').split('-').join('')
    );

    if (isIncludeName) {
      toast.error(() => (
        <div>
          <Accent>{name}</Accent> is already in contacts
        </div>
      ));
      return;
    }
    if (isIncludeNumber) {
      toast.error(() => (
        <div>
          phonenumber <Accent>{number}</Accent> is already in contacts
        </div>
      ));
      return;
    }

    setContacts(state => [contact, ...state]);
  };

  const deleteContact = contactId => {
    setContacts(state => state.filter(contact => contact.id !== contactId));
  };

  const changeFilter = e => {
    setFilter(e.target.value);
  };

  const filteredContactsByName = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <>
      <Section>
        <Container>
          <Title>Phonebook</Title>
          <AddContactForm onSubmit={addContact} />
        </Container>
      </Section>

      <Section>
        <Container>
          <Title>Contacts</Title>
          <Filter value={filter} onChange={changeFilter} />
          <ContactList
            contacts={filteredContactsByName()}
            onDeleteContact={deleteContact}
          />
        </Container>
      </Section>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}
