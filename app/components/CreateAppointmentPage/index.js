import React from 'react';
import PropTypes from 'prop-types';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';

import PaperFrame from 'components/PaperFrame';
import CreateAppointmentForm from 'containers/CreateAppointmentForm';

const CreateAppointmentPage = props => (
  <PaperFrame headerText="Create Appointment" icon={<CreateOutlinedIcon />}>
    <CreateAppointmentForm companyId={props.match.params.companyId} />
  </PaperFrame>
);

CreateAppointmentPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      companyId: PropTypes.string.isRequired,
    }),
  }),
};

export default CreateAppointmentPage;
