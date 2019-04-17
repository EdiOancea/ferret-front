import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import { Field, ErrorMessage } from 'formik';

const FormInput = props => {
  const { type, label, name } = props;

  return (
    <div>
      <Field name={name}>
        {({ field }) => (
          <TextField
            name={name}
            type={type}
            label={label}
            value={field.value[name]}
            onChange={field.onChange}
            fullWidth
          />
        )}
      </Field>
      <ErrorMessage name={name} />
    </div>
  );
};

FormInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default FormInput;
