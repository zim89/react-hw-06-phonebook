export const getContacts = ({ contacts: { contacts } }) => contacts;

export const getFilter = ({ filter }) => filter;

export const getFilteredContacts = ({ contacts: { contacts }, filter }) => {
  if (!filter) {
    return contacts;
  }
  const normalizedFilter = filter.toLowerCase();

  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};
