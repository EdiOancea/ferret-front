import React from 'react';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';

import PaperFrame from 'components/PaperFrame';
import AddCompanyForm from 'containers/AddCompanyForm';

const AddCompanyPage = () => (
  <PaperFrame headerText="Add Company" icon={<CreateOutlinedIcon />}>
    <AddCompanyForm />
  </PaperFrame>
);

export default AddCompanyPage;
