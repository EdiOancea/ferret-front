import React from 'react';
import { render } from 'enzyme';
import { fromJS } from 'immutable';
import {
  ViewCompany,
  mapStateToProps,
  mapDispatchToProps,
} from 'containers/ViewCompany';
import { company } from '../../../../tools/mockData';

describe('<ViewCompany />', () => {
  it('should get the error if view company failed', () => {
    const getCompanyState = fromJS({
      errorMessage: 'This is an error',
    });
    const initialState = fromJS({
      getCompany: getCompanyState,
    });
    expect(mapStateToProps(initialState).errorMessage).toEqual(
      'This is an error',
    );
  });

  it('should view company when page is loaded', () => {
    const dispatch = jest.fn();
    mapDispatchToProps(dispatch).fetchCompany('1');
    expect(dispatch.mock.calls[0][0]).toEqual({
      type: 'GET_COMPANY',
      id: '1',
    });
  });

  it('should render the company item correctly', () => {
    const fetchCompany = jest.fn();
    const tree = render(
      <ViewCompany id="1" company={company} fetchCompany={fetchCompany} />,
    );
    expect(tree).toMatchSnapshot();
  });

  it('should render nothing when company does not exist', () => {
    const fetchCompany = jest.fn();
    const tree = render(
      <ViewCompany id={NaN} company={{}} fetchCompany={fetchCompany} />,
    );
    expect(tree).toMatchSnapshot();
  });
});
