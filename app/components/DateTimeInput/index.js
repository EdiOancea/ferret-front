import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import withStyles from '@material-ui/core/styles/withStyles';
import Divider from '@material-ui/core/Divider';

import 'react-datepicker/dist/react-datepicker.css';

const styles = () => ({
  field: {
    // this chain of properties is necessary to make the input field at full width
    '& > div': {
      width: '100%',
      '& > div.react-datepicker__input-container': {
        width: '100%',
        '& input': {
          width: '100%',
        },
      },
    },
    marginTop: '20px',
  },
});

const DateTimeInput = ({ classes, field, handleDateTimeChange }) => (
  <div className={classes.field}>
    <DatePicker
      selected={field.value}
      onChange={handleDateTimeChange}
      showTimeSelect
      timeFormat="HH:mm"
      timeIntervals={15}
      dateFormat="MMMM d, yyyy h:mm aa"
      placeholderText="Select a date and hour"
      timeCaption="time"
    />
    <Divider />
  </div>
);

DateTimeInput.propTypes = {
  classes: PropTypes.object.isRequired,
  field: PropTypes.object.isRequired,
  handleDateTimeChange: PropTypes.func.isRequired,
};

export default withStyles(styles)(DateTimeInput);
