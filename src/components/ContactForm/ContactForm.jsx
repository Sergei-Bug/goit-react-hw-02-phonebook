import { Component } from 'react';

import { Input, Label, Button, Form } from '../App.styled';
import { nanoid } from 'nanoid';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
  handleInputChange = e => {
    const name = e.target.name;
    this.setState({ [name]: e.currentTarget.value });
  };
  handlerClickAdd = event => {
    event.preventDefault();

    const newContact = {
      name: this.state.name,
      number: this.state.number,
      id: nanoid(),
    };

    this.props.onSubmit(newContact);

    this.setState(prevState => ({
      name: '',
      number: '',
    }));
  };

  render() {
    return (
      <Form>
        <Label>
          Name
          <Input
            value={this.state.name}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            onChange={this.handleInputChange}
            required
          />
        </Label>
        <Label>
          Number
          <Input
            type="tel"
            onChange={this.handleInputChange}
            value={this.state.number}
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>
        <Button type="submit" onClick={this.handlerClickAdd}>
          Add contact
        </Button>
      </Form>
    );
  }
}
export default ContactForm;
