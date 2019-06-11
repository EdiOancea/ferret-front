import React from 'react';
import PropTypes from 'prop-types';
import TextInput from 'components/TextInput';
import ImageInput from 'containers/ImageInput';
import { Field, ErrorMessage } from 'formik';

const Input = ({ name, label, type, setFieldValue }) => {
  const renderFields = ({ field, form }) =>
    name === 'images' ? (
      <ImageInput {...{ name, label, type, form, field, setFieldValue }} />
    ) : (
      <TextInput {...{ name, label, type, form, field }} />
    );

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
