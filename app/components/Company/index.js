import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';

import Line from 'components/Line/Loadable';
import CompanyReview from 'containers/CompanyReview';

const styles = () => ({
  root: {
    marginTop: '30px',
    fontSize: '20px',
  },
});

const Company = props => {
  const { classes, company } = props;

  return (
    <div className={classes.root}>
      <Line label="Name">{company.name}</Line>
      <Line label="Address">{company.address}</Line>
      <Line label="Business">{company.business}</Line>
      <Line label="Timetable">{company.timetable}</Line>
      <CompanyReview companyId={company.id} />
    </div>
  );
};

Company.propTypes = {
  classes: PropTypes.object.isRequired,
  company: PropTypes.object,
};

export default withStyles(styles)(Company);
