import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  label: {
    float: 'left',
    width: '50%',
  },
});

const Field = props => {
  const { label, children } = props;
  const classes = useStyles();

  return (
    <div>
      <div className={classes.label}>{label}</div>
      <div className={classes.label}>{children}</div>
    </div>
  );
};

Field.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]),
};

export default Field;
