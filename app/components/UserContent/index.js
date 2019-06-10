import React from 'react';
import PropTypes from 'prop-types';
import PaperFrame from 'components/PaperFrame';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const UserContent = ({ firstName, lastName }) => (
  <PaperFrame headerText="Welcome" icon={<AccountCircleIcon />}>
    <div>{`${firstName} ${lastName}`}</div>
  </PaperFrame>
);

UserContent.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
};

export default UserContent;
