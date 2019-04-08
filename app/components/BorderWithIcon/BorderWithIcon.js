import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  }
});

const BorderWithIcon = (props) => {
  const { classes, text } = props;
  const children = React.Children.map(props.children, child => child);
  return (
    <Paper className={classes.paper}>
      <Avatar className={classes.avatar}>
        {children[0]}
      </Avatar>
      <Typography component="h1" variant="h5">
        {text}
      </Typography>
      {children.map((child, i) => i != 0 ? child : null )}
    </Paper>
  );
};

BorderWithIcon.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BorderWithIcon);
