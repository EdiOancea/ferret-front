import React from 'react';
import PropTypes from 'prop-types';
import FileInput from 'containers/FileInput';
import DateTimeInput from 'containers/DateTimeInput';
import TextInput from 'components/TextInput';
import { Field, ErrorMessage } from 'formik';

const Input = ({ name, label, type, setFieldValue }) => {
  const renderFields = ({ field, form }) => {
    switch (type) {
      case 'images':
        return <FileInput {...{ name, field, setFieldValue }} />;
      case 'dateTime':
        return <DateTimeInput {...{ field, setFieldValue }} />;
      default:
        return <TextInput {...{ name, label, type, form, field }} />;
    }
  };

  return (
    <div>
      <Field name={name}>
        {({ field, form }) => renderFields({ field, form })}
      </Field>
      <ErrorMessage name={name} />
    </div>
  );
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  setFieldValue: PropTypes.func.isRequired,
};

export default Input;
