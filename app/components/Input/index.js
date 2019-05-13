import React from 'react';
import PropTypes from 'prop-types';
import TextInput from 'components/TextInput';
import { Field, ErrorMessage } from 'formik';

const Input = ({ name, label, type }) => (
  <div>
    <Field name={name}>
      {({ field, form }) => (
        <TextInput {...{ name, label, type, form, field }} />
      )}
    </Field>
    <ErrorMessage name={name} />
  </div>
);

Input.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Input;
