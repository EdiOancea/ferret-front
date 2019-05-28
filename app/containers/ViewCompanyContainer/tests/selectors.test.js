import { fromJS } from 'immutable';

import {
  selectErrorMessage,
  selectViewCompany,
  selectCompany,
} from '../selectors';
import { company } from '../../../../tools/mockData';

describe('selectViewCompany', () => {
  it('should select the view company state', () => {
    const viewCompanyState = fromJS({});
    const mockedState = fromJS({
      viewCompany: viewCompanyState,
    });
    expect(selectViewCompany(mockedState)).toEqual(viewCompanyState);
  });
});

describe('selectCompany', () => {
  it('should select the company', () => {
    const mockedState = fromJS({
      viewCompany: {
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
      viewCompany: {
        company,
        errorMessage,
      },
    });
    expect(selectErrorMessage(mockedState)).toEqual(errorMessage);
  });
});
