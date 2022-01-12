import React from 'react';
import { FindForm, Title, Label, LabelTitle, Input } from './Filter.styled';

const Filter = ({ value, onChange }) => {
  return (
    <FindForm>
      <Title>Find contacts:</Title>
      <Label>
        <LabelTitle>find:</LabelTitle>
        <Input
          type="text"
          onChange={onChange}
          value={value}
          name="filter"
          placeholder="Find name"
        />
      </Label>
    </FindForm>
  );
};

export default Filter;