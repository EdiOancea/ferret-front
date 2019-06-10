import React from 'react';
import PropTypes from 'prop-types';
import ViewHeadlineOutlinedIcon from '@material-ui/icons/ViewHeadlineOutlined';

import PaperFrame from 'components/PaperFrame';
import ViewCompanyContainer from 'containers/ViewCompany';

const CompanyPage = props => (
  <PaperFrame
    headerText="Company Information"
    icon={<ViewHeadlineOutlinedIcon />}
  >
    <ViewCompanyContainer id={props.match.params.id} />
  </PaperFrame>
);

CompanyPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }),
};

export default CompanyPage;
