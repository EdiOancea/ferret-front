import React from 'react';
import PaperFrame from 'components/PaperFrame';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import LogOutButton from 'containers/LogOutButton';

const UserContent = props => (
  <PaperFrame headerText="Welcome" icon={<AccountCircleIcon />}>
    {props.name}
    <LogOutButton />
  </PaperFrame>
);

export default UserContent;
