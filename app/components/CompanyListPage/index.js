import React from 'react';
import ListAltIcon from '@material-ui/icons/ListAlt';

import ListFrame from 'components/ListFrame';
import CompanyList from 'containers/CompanyList';

const CompanyListPage = () => (
  <ListFrame headerText="Company list" icon={<ListAltIcon />}>
    <CompanyList />
  </ListFrame>
);

export default CompanyListPage;
