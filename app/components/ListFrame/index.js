import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  header: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: '5% 0% 2% 0%',
    backgroundColor: theme.palette.secondary.main,
  },
});

const ListFrame = props => {
  const { classes, headerText, icon, children } = props;

  return (
    <>
      <div className={classes.header}>
        <Avatar className={classes.avatar}>{icon}</Avatar>
        <Typography variant="h5">{headerText}</Typography>
      </div>
      {children}
    </>
  );
};

ListFrame.propTypes = {
  classes: PropTypes.object.isRequired,
  headerText: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired,
  children: PropTypes.element.isRequired,
};

export default withStyles(styles)(ListFrame);
