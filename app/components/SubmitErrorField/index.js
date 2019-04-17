import React from 'react';
import PropTypes from 'prop-types';

const SubmitErrorField = ({ errorMessage }) => <div> {errorMessage} </div>;

SubmitErrorField.propTypes = {
  errorMessage: PropTypes.string,
};

export default SubmitErrorField;
