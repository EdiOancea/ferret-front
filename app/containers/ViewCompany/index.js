import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import Company from 'components/Company';
import { selectCompany, selectErrorMessage } from './selectors';
import { getCompany } from './actions';
import reducer from './reducer';
import saga from './saga';

export class ViewCompany extends React.Component {
  componentDidMount() {
    this.props.fetchCompany(this.props.id);
  }

  render() {
    return <Company company={this.props.company} />;
  }
}

ViewCompany.propTypes = {
  company: PropTypes.object,
  id: PropTypes.string.isRequired,
  fetchCompany: PropTypes.func.isRequired,
};

export const mapStateToProps = createStructuredSelector({
  company: selectCompany,
  errorMessage: selectErrorMessage,
});

export const mapDispatchToProps = dispatch => ({
  fetchCompany: id => dispatch(getCompany(id)),
});

const withReducer = injectReducer({
  key: 'getCompany',
  reducer,
});

const withSaga = injectSaga({
  key: 'getCompany',
  saga,
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withSaga,
  withReducer,
  withConnect,
)(ViewCompany);
