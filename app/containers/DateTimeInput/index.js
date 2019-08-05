import React from 'react';
import PropTypes from 'prop-types';
import DateTimeInputComponent from 'components/DateTimeInput';

class DateTimeInput extends React.Component {
  handleDateTimeChange(dateTime) {
    this.props.setFieldValue(this.props.field.name, dateTime);
  }

  render() {
    return (
      <DateTimeInputComponent
        handleDateTimeChange={(...params) =>
          this.handleDateTimeChange(...params)
        }
        field={this.props.field}
      />
    );
  }
}

DateTimeInput.propTypes = {
  setFieldValue: PropTypes.func.isRequired,
  field: PropTypes.object.isRequired,
};

export default DateTimeInput;
