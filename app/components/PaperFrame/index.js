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
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
});

const PaperFrame = props => {
  const { classes, text, icon, children } = props;

  return (
    <Paper className={classes.paper}>
      <Avatar className={classes.avatar}>{icon}</Avatar>
      <Typography component="h1" variant="h5">
        {text}
      </Typography>
      {children}
    </Paper>
  );
};

PaperFrame.propTypes = {
  classes: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired,
  children: PropTypes.object,
};

export default withStyles(styles)(PaperFrame);
