import { ToastContainer } from 'react-toastify';
import AddContactForm from 'components/AddContactForm/AddContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { Section, Container, Title } from './Styled';
import 'react-toastify/dist/ReactToastify.min.css';

export default function App() {
  return (
    <>
      <Section>
        <Container>
          <Title>Phonebook</Title>
          <AddContactForm />
        </Container>
      </Section>

      <Section>
        <Container>
          <Title>Contacts</Title>
          <Filter />
          <ContactList />
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
