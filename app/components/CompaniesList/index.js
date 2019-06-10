import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import withStyles from '@material-ui/core/styles/withStyles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import FolderIcon from '@material-ui/icons/Folder';
import LaunchIcon from '@material-ui/icons/Launch';
import Divider from '@material-ui/core/Divider';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

const styles = () => ({
  main: {
    margin: '2% 25% 0% 25%',
  },
});

const CompaniesList = props => {
  const { classes, companies } = props;

  const renderList = () => {
    if (!companies) {
      return null;
    }

    return companies.map(company => (
      <div key={company.id}>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <FolderIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={company.name} />
          <ListItemSecondaryAction>
            <Link to={`/companies/${company.id}`}>
              <LaunchIcon />
            </Link>
          </ListItemSecondaryAction>
        </ListItem>
        <Divider variant="inset" />
      </div>
    ));
  };

  return <List className={classes.main}>{renderList()}</List>;
};

CompaniesList.propTypes = {
  companies: PropTypes.array,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CompaniesList);
