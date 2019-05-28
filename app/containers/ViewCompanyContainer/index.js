import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import Item from 'components/Item';
import { selectCompany, selectErrorMessage } from './selectors';
import { viewCompany } from './actions';
import reducer from './reducer';
import saga from './saga';

export class ViewCompanyContainer extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  componentDidMount() {
    this.props.getCompanyBySlug(this.props.slug);
  }

  formatForDisplay() {
    const company = {
      Name: this.props.company.name,
      Address: this.props.company.address,
      Business: this.props.company.business,
      Rating: this.props.company.rating,
      Manager: this.props.company.manager,
      Active: this.props.company.active,
    };

    return this.props.company.id ? company : {};
  }

  render() {
    return (
      <Item
        {...{
          getItem: () => this.formatForDisplay(),
          ...this.props,
        }}
      />
    );
  }
}

ViewCompanyContainer.propTypes = {
  errorMessage: PropTypes.string,
  company: PropTypes.object.isRequired,
  slug: PropTypes.string.isRequired,
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
