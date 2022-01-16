import React from 'react';
import { ContactListStyle, Item, Name, Button } from './ContactList.styled';
import propTypes from "prop-types";

const ContactList = ({ contacts, onDelete }) => (
  <ContactListStyle>
    {contacts.map(({ id, name, number }) => (
      <Item key={id}>
        <Name>{name}</Name>: {number}
        <Button type="button" onClick={() => onDelete(id)}>
          X
        </Button>
      </Item>
    ))}
  </ContactListStyle>
);

ContactList.propTypes = {
  contacts: propTypes.array,
  onDelete: propTypes.func,
};

export default ContactList;