import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import Rating from 'material-ui-rating';
import Line from 'components/Line/Loadable';

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
      <Line label="Name">{company.name}</Line>
      <Line label="Address">{company.address}</Line>
      <Line label="Business">{company.business}</Line>
      <Line label="Rating">
        <Rating value={company.rating} max={10} />
      </Line>
    </div>
  );
};

Company.propTypes = {
  company: PropTypes.object,
};

export default Company;
