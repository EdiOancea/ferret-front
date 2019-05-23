import React from 'react';
import { shallow } from 'enzyme';
import { fromJS } from 'immutable';
import {
  AddCompanyForm,
  mapStateToProps,
  mapDispatchToProps,
} from 'containers/AddCompanyForm';
import { company } from '../../../../tools/mockData';

describe('<AddCompanyForm />', () => {
  it('should show an error if add company failed', () => {
    const addCompanyState = fromJS({
      errorMessage: 'This is an error',
    });
    const initialState = fromJS({
      addCompany: addCompanyState,
    });
    expect(mapStateToProps(initialState).errorMessage).toEqual(
      'This is an error',
    );
  });

  it('should add company when button is clicked', () => {
    const dispatch = jest.fn();
    mapDispatchToProps(dispatch).onSubmit(company);
    expect(dispatch.mock.calls[0][0]).toEqual({
      type: 'ADD_COMPANY',
      data: company,
    });
  });

  it('should render the add company form correctly', () => {
    const tree = shallow(<AddCompanyForm />);
    expect(tree).toMatchSnapshot();
  });
});
