import React from 'react';
import './ContactList.scss';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { deleteContact } from 'redux/contactsSlice';

const getFilteredContacts = (contacts, filter) => {
  const normalizedFilter = filter.toLowerCase();

  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const filteredContacts = getFilteredContacts(contacts, filter);

  return (
    <ul className="contactList">
      {filteredContacts.length
        ? filteredContacts.map(({ id, name, number }) => (
            <li className="contactList__item" key={id}>
              <div>
                {name}: <span className="contactList__number">{number}</span>
              </div>
              <button
                className="contactList__btn"
                type="button"
                onClick={() => {
                  dispatch(deleteContact(id));
                }}
              >
                Delete
              </button>
            </li>
          ))
        : null}
    </ul>
  );
};

export default ContactList;
