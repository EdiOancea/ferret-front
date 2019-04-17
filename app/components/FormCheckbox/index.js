import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const FormCheckbox = ({ label }) => (
  <FormControlLabel
    control={<Checkbox value="remember" color="primary" />}
    label={label}
  />
);

FormCheckbox.propTypes = {
  label: PropTypes.string.isRequired,
};

export default FormCheckbox;
