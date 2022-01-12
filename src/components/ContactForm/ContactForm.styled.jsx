import styled from 'styled-components';

export const ContactsForm = styled.form`
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 5px;
`;

export const Title = styled.h2`
  margin-bottom: 10px;
  font-size: 16px;
  color: #000;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 10px;
  font-style: italic;
`;

export const LabelTitle = styled.span`
  display: inline-block;
  width: 50px;
  margin-right: 10px;
`;

export const Input = styled.input`
  padding: 10px;

  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  font-size: 16px;
  font-weight: 500;
  outline: none;
  &::placeholder {
  opacity: 1;
  transition: opacity 500ms ease-in-out;
  };
  &:focus::placeholder {
  opacity: 0;
  };
`;

export const Button = styled.button`
  display: block;
  min-width: 100px;
  padding: 5px;

  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  font-size: 16px;
  font-weight: 500;
  background-color: #005800;
  color: white;
  outline: none;
  cursor: pointer;

  transition: color 250ms ease-in-out, background-color 250ms ease-in-out;
  &:hover {
  background-color: rgb(231, 235, 236);
  color: #000;
  }
`;