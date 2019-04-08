import React from 'react';
import PropTypes from 'prop-types';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import withStyles from '@material-ui/core/styles/withStyles';

import BorderWithIcon from '../BorderWithIcon/BorderWithIcon';

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
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing.unit,
    },
    submit: {
      marginTop: theme.spacing.unit * 3,
    },
  },
});

const SignInForm = (props) => {
  const { classes, onEmailChange, onPasswordChange, onCheckboxChange, onButtonClick } = props;
  return (
    <main className={classes.main}>
      <CssBaseline />
      <BorderWithIcon text="Sign In">
        <LockOutlinedIcon />
        <form className={classes.form}>
         <FormControl margin="normal" required fullWidth>
           <InputLabel htmlFor="email">Email Address</InputLabel>
           <Input id="email" name="email" autoComplete="email" autoFocus onChange={onEmailChange} />
         </FormControl>
         <FormControl margin="normal" required fullWidth>
           <InputLabel htmlFor="password">Password</InputLabel>
           <Input name="password" type="password" id="password" autoComplete="current-password" onChange={onPasswordChange} />
         </FormControl>
         <FormControlLabel
           control={<Checkbox value="remember" color="primary" onChange={onCheckboxChange} />}
           label="Remember me"
         />
         <Button
           onClick={onButtonClick}
           fullWidth
           variant="contained"
           color="primary"
           className={classes.submit}
         >
           Sign in
         </Button>
       </form>
      </BorderWithIcon>
    </main>
  );
};

SignInForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SignInForm);
