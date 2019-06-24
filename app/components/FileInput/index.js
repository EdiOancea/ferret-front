import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = () => ({
  root: {
    marginTop: '12px',
  },
});

const FileInput = props => {
  const { classes, name, handleImageChange } = props;

  return (
    <div className={classes.root}>
      <input
        id={name}
        name={name}
        type="file"
        onChange={handleImageChange}
        multiple
      />
    </div>
  );
};

FileInput.propTypes = {
  classes: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  handleImageChange: PropTypes.func.isRequired,
};

export default withStyles(styles)(FileInput);
