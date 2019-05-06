import React from 'react';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import PaperFrame from 'components/PaperFrame';
import SignInForm from 'containers/SignInForm';

const SignInPage = () => (
  <PaperFrame headerText="Sign in" icon={<LockOutlinedIcon />}>
    <SignInForm />
  </PaperFrame>
);

export default SignInPage;
