import React from 'react';
import { ContactListStyle, Item, Name, Button } from './ContactList.styled';

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

export default ContactList;