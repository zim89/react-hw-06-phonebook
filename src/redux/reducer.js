import { combineReducers } from 'redux';

// Композиция редюсеров
const contactsInitialState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  { id: 'id-5', name: 'Ant Serious', number: '333-91-26' },
];

const contactsReducer = (state = contactsInitialState, action) => {
  switch (action.type) {
    case 'contacts/addContact':
      return [action.payload, ...state];

    case 'contacts/deleteContact':
      return state.filter(({ id }) => id !== action.payload);

    default:
      return state;
  }
};

const filterReducer = (state = '', action) => {
  switch (action.type) {
    case 'filter/setFilter':
      return action.payload;

    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

// Один Reducer для всего state
/*
const initialState = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    { id: 'id-5', name: 'Ant Serious', number: '333-91-26' },
  ],
  filter: '',
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'filter/setFilter':
      return { ...state, filter: action.payload };

    case 'contacts/addContact':
      return {
        ...state,
        contacts: [action.payload, ...state.contacts],
      };

    case 'contacts/deleteContact':
      return {
        ...state,
        contacts: state.contacts.filter(({ id }) => id !== action.payload),
      };

    default:
      return state;
  }
};
*/
