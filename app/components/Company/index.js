import React from 'react';
import PropTypes from 'prop-types';
import SlideShow from 'react-image-show';
import withStyles from '@material-ui/core/styles/withStyles';
import Rating from 'material-ui-rating';
import Divider from '@material-ui/core/Divider';
import Line from 'components/Line/Loadable';
import CompanyReview from 'containers/CompanyReview';

const styles = theme => ({
  root: {
    marginTop: '30px',
    fontSize: '20px',
  },
});

class Company extends React.Component {
  renderSlideShow(images) {
    const imageURLs = images.map(image => image.url);

    return (
      <SlideShow
        images={imageURLs}
        width="100%"
        imagesWidth="300px"
        imagesHeight="225px"
        imagesHeightMobile="100%"
        thumbnailsWidth="100%"
        thumbnailsHeight="100%"
        infinite
        indicators
        thumbnails
        fixedImagesHeight
      />
    );
  }

  render() {
    const { classes, company } = this.props;
    if (company === null) {
      return null;
    }
    const { id, name, address, business, images } = company;

    return (
      <div className={classes.root}>
        <Line label="Name">{name}</Line>
        <Divider />
        <Line label="Address">{`${address.streetName} ${
          address.streetNumber
        }, ap. ${address.apartmentNumber}, ${address.city}, ${
          address.country
        }`}</Line>
        <Divider />
        <Line label="Business">{business}</Line>
        <Divider />
        <CompanyReview companyId={id} />
        {this.renderSlideShow(images)}
      </div>
    );
  }
}

Company.propTypes = {
  classes: PropTypes.object.isRequired,
  company: PropTypes.object,
};

export default withStyles(styles)(Company);
