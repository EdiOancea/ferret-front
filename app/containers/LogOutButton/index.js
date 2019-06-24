import React from 'react';
import TextButton from 'components/TextButton';
import { connect } from 'react-redux';
import { signOut } from 'containers/App/actions';

class LogOutButton extends React.Component {
  render() {
    return <TextButton text="Log out" onClick={this.props.signOut} />;
  }
}

const mapDispatchToProps = dispatch => ({
  signOut: () => dispatch(signOut()),
});

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default withConnect(LogOutButton);
