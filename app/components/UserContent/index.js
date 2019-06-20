import React from 'react';
import PropTypes from 'prop-types';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import PaperFrame from 'components/PaperFrame';
import LogOutButton from 'containers/LogOutButton';

const UserContent = ({ firstName, lastName }) => (
  <PaperFrame headerText="Welcome" icon={<AccountCircleIcon />}>
    <div>{`${firstName} ${lastName}`}</div>
    <LogOutButton />
  </PaperFrame>
);

UserContent.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
};

export default UserContent;
