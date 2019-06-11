import React from 'react';
import ImageInputComponent from 'components/ImageInput';

class ImageInput extends React.Component {
  constructor(props) {
    super(props);
    this.fileUpload = React.createRef();
    this.showFileUpload = this.showFileUpload.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
  }

  showFileUpload() {
    if (this.fileUpload) {
      this.fileUpload.current.click();
    }
  }

  handleImageChange(e) {
    const { files } = e.target;
    this.props.setFieldValue(this.props.field.name, files);
  }

  render() {
    const { name, label, type, setFieldValue } = this.props;

    return (
      <ImageInputComponent
        showFileUpload={this.showFileUpload}
        handleImageChange={this.handleImageChange}
        fileUpload={this.fileUpload}
        {...{ name, label, type, setFieldValue }}
      />
    );
  }
}

export default ImageInput;
