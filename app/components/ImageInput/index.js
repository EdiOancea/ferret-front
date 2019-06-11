import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';
import withStyles from '@material-ui/core/styles/withStyles';
import InputAdornment from '@material-ui/core/InputAdornment';
import AttachFileIcon from '@material-ui/icons/AttachFile';

const styles = theme => ({
  hidden: { display: 'none' },
  avatar: {
    cursor: 'pointer',
    borderRadius: 0,
    marginBottom: '25%',
    backgroundColor: theme.palette.primary.main,
  },
});

const ImageInput = props => {
  const {
    classes,
    name,
    label,
    type,
    setFieldValue,
    showFileUpload,
    handleImageChange,
    fileUpload,
  } = props;

  const renderTextField = () => (
    <TextField
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <Avatar className={classes.avatar} onClick={showFileUpload}>
              <AttachFileIcon />
            </Avatar>
          </InputAdornment>
        ),
      }}
      name={name}
      type={type}
      label={label}
      setFieldValue={setFieldValue}
      fullWidth
    />
  );

  return (
    <div>
      {renderTextField()}
      <input
        className={classes.hidden}
        id={name}
        name={name}
        type="file"
        onChange={handleImageChange}
        ref={fileUpload}
        multiple
      />
    </div>
  );
};

ImageInput.propTypes = {
  classes: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  setFieldValue: PropTypes.func.isRequired,
  showFileUpload: PropTypes.func.isRequired,
  handleImageChange: PropTypes.func.isRequired,
  fileUpload: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImageInput);
