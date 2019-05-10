import React from 'react';
import PaperFrame from 'components/PaperFrame';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const UserContent = props => (
  <PaperFrame headerText="Welcome" icon={<AccountCircleIcon />}>
    <div> {props.name} </div>
  </PaperFrame>
);

export default UserContent;
