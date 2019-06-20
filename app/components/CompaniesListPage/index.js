import React from 'react';
import ListAltIcon from '@material-ui/icons/ListAlt';

import ListFrame from 'components/ListFrame';
import ListCompanies from 'containers/ListCompanies';

const CompaniesListPage = () => (
  <ListFrame headerText="Company list" icon={<ListAltIcon />}>
    <ListCompanies />
  </ListFrame>
);

export default CompaniesListPage;
