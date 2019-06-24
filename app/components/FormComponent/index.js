import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import { Formik, Form } from 'formik';

import Input from 'components/Input';
import FormCheckbox from 'components/FormCheckbox';
import FormButton from 'components/FormButton';

const styles = theme => ({
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
});

const renderFields = (fields, options) =>
  fields.map(field => {
    switch (field.type) {
      case 'input':
        return (
          <Input
            key={field.options.name}
            setFieldValue={options.setFieldValue}
            {...field.options}
          />
        );
      case 'button':
        return <FormButton key={field.options.name} {...field.options} />;
      case 'checkbox':
        return <FormCheckbox key={field.options.name} {...field.options} />;
      default:
        return null;
    }
  });

const FormComponent = props => {
  const {
    fields,
    initialValues,
    validationSchema,
    classes,
    onSubmit,
    errorMessage,
  } = props;

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      render={({ setFieldValue }) => (
        <Form className={classes.form}>
          {renderFields(fields, { setFieldValue })}
          <div>{errorMessage}</div>
        </Form>
      )}
    />
  );
};

FormComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  fields: PropTypes.array.isRequired,
  initialValues: PropTypes.object.isRequired,
  validationSchema: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  errorMessage: PropTypes.string.isRequired,
};

export default withStyles(styles)(FormComponent);
