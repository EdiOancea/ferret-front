import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Rating from 'material-ui-rating';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'hidden',
  },
  table: {
    width: '100%',
    fontSize: '64px',
  },
});

const Item = props => {
  const { getItem, classes } = props;

  const renderItem = () => {
    const item = getItem();
    return (
      <Table className={classes.table}>
        <TableBody>
          {Object.entries(getItem()).map(entry => (
            <TableRow key={entry[0]} className={classes.tablerow}>
              <TableCell align="center">{entry[0]}</TableCell>
              <TableCell align="center">
                {entry[0] !== 'Rating' ? (
                  String(entry[1])
                ) : (
                  <Rating value={entry[1]} max={5} />
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  };

  return <div className={classes.root}>{renderItem()}</div>;
};

Item.propTypes = {
  getItem: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Item);
