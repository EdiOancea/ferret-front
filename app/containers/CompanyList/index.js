import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import List from 'components/List';
import { selectCompanies, selectErrorMessage } from './selectors';
import { getCompanies } from './actions';
import reducer from './reducer';
import saga from './saga';

export class CompanyList extends React.Component {
  componentDidMount() {
    this.props.fetchCompanies();
  }

  render() {
    return <List companies={this.props.companies} />;
  }
}

CompanyList.propTypes = {
  companies: PropTypes.array,
  fetchCompanies: PropTypes.func.isRequired,
};

export const mapStateToProps = createStructuredSelector({
  companies: selectCompanies,
  errorMessage: selectErrorMessage,
});

export const mapDispatchToProps = dispatch => ({
  fetchCompanies: () => dispatch(getCompanies()),
});

const withReducer = injectReducer({
  key: 'getCompanies',
  reducer,
});

const withSaga = injectSaga({
  key: 'getCompanies',
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
)(CompanyList);
