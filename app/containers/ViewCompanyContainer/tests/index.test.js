import React from 'react';
import { render } from 'enzyme';
import { fromJS } from 'immutable';
import {
  ViewCompanyContainer,
  mapStateToProps,
  mapDispatchToProps,
} from 'containers/ViewCompanyContainer';
import { company } from '../../../../tools/mockData';

describe('<ViewCompanyContainer />', () => {
  it('should get the error if view company failed', () => {
    const viewCompanyState = fromJS({
      errorMessage: 'This is an error',
    });
    const initialState = fromJS({
      viewCompany: viewCompanyState,
    });
    expect(mapStateToProps(initialState).errorMessage).toEqual(
      'This is an error',
    );
  });

  it('should view company when page is loaded', () => {
    const dispatch = jest.fn();
    mapDispatchToProps(dispatch).getCompanyBySlug('1');
    expect(dispatch.mock.calls[0][0]).toEqual({
      type: 'VIEW_COMPANY',
      id: '1',
    });
  });

  it('should render the company item correctly', () => {
    const getCompanyBySlug = jest.fn();
    const tree = render(
      <ViewCompanyContainer
        slug="1"
        company={company}
        getCompanyBySlug={getCompanyBySlug}
      />,
    );
    expect(tree).toMatchSnapshot();
  });

  it('should render nothing when company does not exist', () => {
    const getCompanyBySlug = jest.fn();
    const tree = render(
      <ViewCompanyContainer
        slug={NaN}
        company={{}}
        getCompanyBySlug={getCompanyBySlug}
      />,
    );
    expect(tree).toMatchSnapshot();
  });
});
