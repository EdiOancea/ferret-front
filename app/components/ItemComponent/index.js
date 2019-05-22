import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    margin: `${theme.spacing.unit * 4}px 0 ${theme.spacing.unit * 2}px`,
  },
});

/* const item = {
  id: 1,
  name: 'Algotech Software S.R.L',
  address: 'Iugoslaviei 62, Cluj-Napoca, Cluj, Romania',
  business: 'Software Development',
  rating: 5,
  manager: 'Cosmin Tutunaru',
  active: true,
}; */
const ItemComponent = props => {
  const { item, classes } = props;

  const renderProperties = () =>
    Object.entries(item).map(entry => (
      <div key={entry[0]}>
        <ListItem key={entry[0]}>
          <ListItemText primary={entry[0]} />
          <ListItemText primary={String(entry[1])} />
        </ListItem>
        <Divider />
      </div>
    ));

  return (
    <div className={classes.root}>
      <List component="nav">{renderProperties()}</List>
    </div>
  );
};

ItemComponent.propTypes = {
  item: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ItemComponent);
