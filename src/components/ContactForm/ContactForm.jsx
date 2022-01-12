import React, { Component } from 'react';
import { ContactsForm, Title, Label, LabelTitle, Input, Button } from './ContactForm.styled';
import { nanoid } from 'nanoid'

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleSubmit = evt => {
    evt.preventDefault();

    const { name, number } = this.state;

    if (this.checkContacts(this.props.contacts, name)) {
      alert(`${name} is already in contacts.`);
    } else {
      this.props.onSubmit({
        id: nanoid(),
        name,
        number,
      });

      this.reset();
    }
  };

  checkContacts = (arr, target) => {
    return arr.find(({ name }) => name.toLowerCase() === target.toLowerCase());
  };

  changeInput = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;

    return (
      <ContactsForm onSubmit={this.handleSubmit}>
        <Title>Add new contacts:</Title>
        <Label>
          <LabelTitle>Name:</LabelTitle>
          <Input
            type="text"
            onChange={this.changeInput}
            value={name}
            name="name"
            placeholder="Name"
            required
          />
        </Label>
        <Label>
          <LabelTitle>Phone:</LabelTitle>
          <Input
            type="text"
            onChange={this.changeInput}
            value={number}
            name="number"
            placeholder="Phone number"
            required
          />
        </Label>

        <Button type="submit">
          Add
        </Button>
      </ContactsForm>
    );
  }
}

export default ContactForm;