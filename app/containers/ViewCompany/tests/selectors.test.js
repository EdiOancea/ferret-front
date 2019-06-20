import { fromJS } from 'immutable';

import {
  selectErrorMessage,
  selectGetCompany,
  selectCompany,
} from '../selectors';
import { company } from '../../../../tools/mockData';

describe('selectGetCompany', () => {
  it('should select the view company state', () => {
    const getCompanyState = fromJS({});
    const mockedState = fromJS({
      getCompany: getCompanyState,
    });
    expect(selectGetCompany(mockedState)).toEqual(getCompanyState);
  });
});

describe('selectCompany', () => {
  it('should select the company', () => {
    const mockedState = fromJS({
      getCompany: {
        company,
        errorMessage: '',
      },
    });
    expect(selectCompany(mockedState).toJS()).toEqual(company);
  });
});

describe('selectErrorMessage', () => {
  it('should select the error message', () => {
    const errorMessage = 'error message';
    const mockedState = fromJS({
      getCompany: {
        company,
        errorMessage,
      },
    });
    expect(selectErrorMessage(mockedState)).toEqual(errorMessage);
  });
});
