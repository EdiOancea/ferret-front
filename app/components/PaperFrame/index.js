import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

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
  const { classes, headerText, icon, children } = props;

  return (
    <div className={classes.main}>
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>{icon}</Avatar>
        <Typography component="h1" variant="h5">
          {headerText}
        </Typography>
        {children}
      </Paper>
    </div>
  );
};

PaperFrame.propTypes = {
  classes: PropTypes.object.isRequired,
  headerText: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired,
  children: PropTypes.object || PropTypes.array,
};

export default withStyles(styles)(PaperFrame);
