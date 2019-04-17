import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import PaperFrame from 'components/PaperFrame';
import SignInForm from 'containers/SignInForm';

const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
});

const SignInPage = ({ classes }) => (
  <div className={classes.main}>
    <PaperFrame text="Sign in" icon={<LockOutlinedIcon />}>
      <SignInForm />
    </PaperFrame>
  </div>
);

SignInPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SignInPage);
