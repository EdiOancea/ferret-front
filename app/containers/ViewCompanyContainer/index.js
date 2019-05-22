import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import ItemComponent from 'components/ItemComponent';
import { selectCompany, selectErrorMessage } from './selectors';
import { viewCompany } from './actions';
import reducer from './reducer';
import saga from './saga';

// const config = {};

export class ViewCompanyContainer extends React.Component {
  state = {};

  componentDidMount() {
    this.props.getCompanyBySlug(this.props.slug);
  }

  render() {
    return (
      <ItemComponent
        {...{
          item: this.props.company,
          ...this.props,
        }}
      />
    );
  }
}

ViewCompanyContainer.propTypes = {
  errorMessage: PropTypes.string.isRequired,
  company: PropTypes.object.isRequired,
};

export const mapStateToProps = createStructuredSelector({
  company: selectCompany,
  errorMessage: selectErrorMessage,
});

export const mapDispatchToProps = dispatch => ({
  getCompanyBySlug: slug => dispatch(viewCompany(slug)),
});

const withReducer = injectReducer({
  key: 'viewCompany',
  reducer,
});

const withSaga = injectSaga({
  key: 'viewCompany',
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
)(ViewCompanyContainer);
