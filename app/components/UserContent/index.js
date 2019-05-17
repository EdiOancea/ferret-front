import React from 'react';
import PropTypes from 'prop-types';
import PaperFrame from 'components/PaperFrame';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const UserContent = ({ name }) => (
  <PaperFrame headerText="Welcome" icon={<AccountCircleIcon />}>
    <div>{name}</div>
  </PaperFrame>
);

UserContent.propTypes = {
  name: PropTypes.string.isRequired,
};


export default UserContent;
