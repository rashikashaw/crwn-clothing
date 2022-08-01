import React from "react";
import { FormInputLabel, Input, Group } from './FormInput.styles';

export const FormInput = ({ handleChange, label, ...otherProps }) => {
  return (
      <Group>
        <Input onChange={handleChange} {...otherProps} />
        {label && (
            <FormInputLabel shrink={otherProps.value.length}>
            {label}
            </FormInputLabel>
        )}
      </Group>
  );
};
