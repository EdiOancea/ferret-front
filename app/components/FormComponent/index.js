import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import { Formik, Form } from 'formik';

import SubmitErrorField from 'components/SubmitErrorField';
import FormInput from 'components/FormInput';
import FormCheckbox from 'components/FormCheckbox';
import FormButton from 'components/FormButton';

const styles = theme => ({
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
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
      render={() => (
        <Form className={classes.form}>
          {fields.map(field => {
            switch (field.type) {
              case 'input':
                return (
                  <FormInput key={field.options.name} {...field.options} />
                );
              case 'button':
                return (
                  <FormButton key={field.options.name} {...field.options} />
                );
              case 'checkbox':
                return (
                  <FormCheckbox key={field.options.name} {...field.options} />
                );
              default:
                return null;
            }
          })}
          <SubmitErrorField errorMessage={errorMessage} />
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
