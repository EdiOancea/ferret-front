import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import Rating from 'material-ui-rating';
import Field from 'components/Field/Loadable';

const useStyles = makeStyles({
  root: {
    marginTop: '30px',
    fontSize: '20px',
  },
});

const Company = props => {
  const { company } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Field field="Name">{company.name}</Field>
      <Field field="Address">{company.address}</Field>
      <Field field="Business">{company.business}</Field>
      <Field field="Rating">
        <Rating value={company.rating} max={10} />
      </Field>
    </div>
  );
};

Company.propTypes = {
  company: PropTypes.object,
};

export default Company;
