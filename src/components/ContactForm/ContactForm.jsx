import{ useState } from 'react';
import { ContactsForm, Title, Label, LabelTitle, Input, Button } from './ContactForm.styled';


const ContactForm = ({onSubmit}) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const changeInput = evt => {
    const { name, value } = evt.target;
        
      if (name === "name") {
        setName(value);
      };
      if (name === "number") {
        setNumber(value);
      };
    
    // switch (name) {
    //   case 'name':
    //       setName(value);
    //       break;
    //   case 'number':
    //       setNumber(value);
    //       break;
    //   default:
    //       return;
    // }
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    onSubmit({name, number});
    setName('');
    setNumber('');
  };

  return (
    <ContactsForm onSubmit={handleSubmit}>
      <Title>Add new contacts:</Title>
      <Label>
        <LabelTitle>Name:</LabelTitle>
        <Input
          type="text"
          onChange={changeInput}
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
          onChange={changeInput}
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

export default ContactForm;