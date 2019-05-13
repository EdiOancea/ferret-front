import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

const TextInput = ({ field, name, type, label }) => (
  <TextField
    name={name}
    type={type}
    label={label}
    value={field.value[name]}
    onChange={field.onChange}
    fullWidth
  />
);

TextInput.propTypes = {
  field: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default TextInput;
