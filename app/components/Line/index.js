import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  line: {
    overflow: 'auto',
  },
  label: {
    float: 'left',
    width: '50%',
  },
});

const Field = props => {
  const { classes, label, children } = props;

  return (
    <div className={classes.line}>
      <div className={classes.label}>{label}</div>
      <div className={classes.label}>{children}</div>
    </div>
  );
};

Field.propTypes = {
  classes: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]),
};

export default withStyles(styles)(Field);
