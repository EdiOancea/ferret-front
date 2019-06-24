import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
});

const TextButton = props => {
  const { classes, text } = props;

  return (
    <Button color="primary" className={classes.button} onClick={props.onClick}>
      {text}
    </Button>
  );
};

TextButton.propTypes = {
  classes: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default withStyles(styles)(TextButton);
