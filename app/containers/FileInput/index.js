import React from 'react';
import PropTypes from 'prop-types';
import FileInputComponent from 'components/FileInput';

class FileInput extends React.Component {
  handleImageChange(e) {
    const { files } = e.target;
    this.props.setFieldValue(this.props.field.name, files);
  }

  render() {
    const { name, setFieldValue } = this.props;

    return (
      <FileInputComponent
        handleImageChange={(...params) => this.handleImageChange(...params)}
        {...{ name, setFieldValue }}
      />
    );
  }
}

FileInput.propTypes = {
  name: PropTypes.string.isRequired,
  setFieldValue: PropTypes.func.isRequired,
  field: PropTypes.object.isRequired,
};

export default FileInput;
