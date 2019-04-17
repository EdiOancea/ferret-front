import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});

const FormButton = ({ text, classes }) => (
  <Button
    type="submit"
    variant="contained"
    color="primary"
    className={classes.submit}
    fullWidth
  >
    {text}
  </Button>
);

FormButton.propTypes = {
  text: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FormButton);
