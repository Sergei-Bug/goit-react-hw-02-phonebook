import { Component } from 'react';

import { Wrapper, Title } from './App.styled';
import ListContact from './ListContact/ListContact';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ListItem from './ListContact/ListItem';

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
  handlerAddContact = newContact => {
    if (this.state.contacts !== '') {
      if (
        this.state.contacts.some(el =>
          el.name.toLowerCase().includes(newContact.name.toLowerCase())
        )
      ) {
        alert(`${newContact.name} is alredy in contacs`);
        return;
      }
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };
  handleInputChange = e => {
    const name = e.target.name;
    this.setState({ [name]: e.currentTarget.value });
  };
  handleDeleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    return (
      <Wrapper>
        <Title>Phonebook</Title>
        <ContactForm onSubmit={this.handlerAddContact} />
        <Title>Contact</Title>
        <Filter
          value={this.state.filter}
          handleInputChange={this.handleInputChange}
        />
        <ListContact>
          <ListItem
            data={this.state.contacts}
            filter={this.state.filter}
            handleDeleteContact={this.handleDeleteContact}
          />
        </ListContact>
      </Wrapper>
    );
  }
}
export default App;
