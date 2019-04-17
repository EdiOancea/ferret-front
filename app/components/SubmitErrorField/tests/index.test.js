import React from 'react';
import { render } from 'enzyme';
import SubmitErrorField from 'components/SubmitErrorField';

describe('<SubmitErrorField />', () => {
  it('should not regress', () => {
    const tree = render(<SubmitErrorField errorMessage="test error message" />);
    expect(tree).toMatchSnapshot();
  });
});
