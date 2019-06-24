import React from 'react';
import PropTypes from 'prop-types';
import SlideShow from 'react-image-show';
import withStyles from '@material-ui/core/styles/withStyles';
import Rating from 'material-ui-rating';
import Divider from '@material-ui/core/Divider';
import Line from 'components/Line/Loadable';

const styles = theme => ({
  root: {
    marginTop: '30px',
    fontSize: '20px',
  },
});

const Company = props => {
  const { classes, company } = props;

  const renderSlideShow = () => {
    const imageURLs = company.images.map(image => image.url);

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
  };

  const renderCompany = () =>
    company ? (
      <div className={classes.root}>
        <Line label="Name">{company.name}</Line>
        <Divider />
        <Line label="Address">{company.address}</Line>
        <Divider />
        <Line label="Business">{company.business}</Line>
        <Divider />
        <Line label="Timetable">{company.timetable}</Line>
        <Divider />
        {renderSlideShow()}
      </div>
    ) : null;

  return renderCompany();
};

Company.propTypes = {
  classes: PropTypes.object.isRequired,
  company: PropTypes.object,
};

export default withStyles(styles)(Company);
