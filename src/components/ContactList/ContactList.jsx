import React from 'react';
import PropTypes from 'prop-types';
import './ContactList.scss';

function ContactList({ contacts, onDeleteContact }) {
  return (
    <ul className="contactList">
      {contacts.length
        ? contacts.map(({ id, name, number }) => (
            <li className="contactList__item" key={id}>
              <div>
                {name}: <span className="contactList__number">{number}</span>
              </div>
              <button
                className="contactList__btn"
                type="button"
                onClick={() => onDeleteContact(id)}
              >
                Delete
              </button>
            </li>
          ))
        : null}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ),
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
