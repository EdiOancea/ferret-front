import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import FolderIcon from '@material-ui/icons/Folder';

const styles = theme => ({
  main: {
    flexGrow: 1,
    maxWidth: '50%',
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
});

const ListFrame = props => {
  const { classes, companies } = props;

  const renderList = () => {
    if (!companies) {
      return null;
    }

    return companies.map(company => (
      <ListItem key={company.id}>
        <ListItemAvatar>
          <Avatar>
            <FolderIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={company.name} />
      </ListItem>
    ));
  };

  return (
    <Grid item xs={12} md={6} className={classes.main}>
      <div className={classes.demo}>
        <List>{renderList()}</List>
      </div>
    </Grid>
  );
};

ListFrame.propTypes = {
  companies: PropTypes.array,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ListFrame);
