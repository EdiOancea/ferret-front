import React from 'react';
import PropTypes from 'prop-types';
import ViewHeadlineOutlinedIcon from '@material-ui/icons/ViewHeadlineOutlined';

import PaperFrame from 'components/PaperFrame';
import ViewCompanyContainer from 'containers/ViewCompanyContainer';

const ViewCompanyPage = props => (
  <PaperFrame
    headerText="Company Information"
    icon={<ViewHeadlineOutlinedIcon />}
  >
    <ViewCompanyContainer slug={props.match.params.slug} />
  </PaperFrame>
);

ViewCompanyPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      slug: PropTypes.number.isRequired,
    }),
  }),
};

export default ViewCompanyPage;
