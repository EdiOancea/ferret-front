import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  field: {
    float: 'left',
    width: '50%',
  },
});

const Field = props => {
  const { field, children } = props;
  const classes = useStyles();

  return (
    <div>
      <div className={classes.field}>{field}</div>
      <div className={classes.field}>{children}</div>
    </div>
  );
};

Field.propTypes = {
  field: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]),
};

export default Field;
