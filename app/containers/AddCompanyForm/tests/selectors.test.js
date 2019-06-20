import { fromJS } from 'immutable';

import { selectErrorMessage, selectAddCompany } from '../selectors';
import { company } from '../../../../tools/mockData';

describe('selectAddCompany', () => {
  it('should select the add company state', () => {
    const addCompanyState = fromJS({});
    const mockedState = fromJS({
      addCompany: addCompanyState,
    });
    expect(selectAddCompany(mockedState)).toEqual(addCompanyState);
  });
});

describe('selectErrorMessage', () => {
  it('should select the error message', () => {
    const errorMessage = 'error message';
    const mockedState = fromJS({
      addCompany: {
        company,
        errorMessage,
      },
    });
    expect(selectErrorMessage(mockedState)).toEqual(errorMessage);
  });
});
