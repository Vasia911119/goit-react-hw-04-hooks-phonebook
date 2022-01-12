import styled from 'styled-components';

export const ContactListStyle = styled.ul`
  padding: 20px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 5px;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
  padding-bottom: 10px;
  border-bottom: 2px solid #000;
`;

export const Name = styled.span`
  font-weight: 500;
`;

export const Button = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  padding-left: 7px;
  width: 30px;
  height: 30px;
  font-size: 20px;

  border-radius: 30%;
  border: 1px solid rgba(0, 0, 0, 0.5);
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