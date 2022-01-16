import React from 'react';
import { FindForm, Title, Label, LabelTitle, Input } from './Filter.styled';
import propTypes from "prop-types";

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

Filter.propTypes = {
  value: propTypes.string,
  onChange: propTypes.func,
};

export default Filter;