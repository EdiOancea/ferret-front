import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { push as pushAction } from 'connected-react-router';
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

  onCreateAppointment() {
    const { company, push } = this.props;
    push(`${company.get('id')}/create-appointment`);
  }

  render() {
    const company = this.props.company
      ? this.props.company.toJS()
      : this.props.company;

    return (
      <Company
        company={company}
        onCreateAppointment={() => this.onCreateAppointment()}
      />
    );
  }
}

ViewCompany.propTypes = {
  company: PropTypes.object,
  id: PropTypes.string.isRequired,
  fetchCompany: PropTypes.func.isRequired,
  push: PropTypes.func.isRequired,
};

export const mapStateToProps = createStructuredSelector({
  company: selectCompany,
  errorMessage: selectErrorMessage,
});

export const mapDispatchToProps = dispatch => ({
  fetchCompany: id => dispatch(getCompany(id)),
  push: path => dispatch(pushAction(path)),
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
