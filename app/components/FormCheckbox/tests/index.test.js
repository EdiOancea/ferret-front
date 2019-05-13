import React from 'react';
import { render } from 'enzyme';
import FormCheckbox from 'components/FormCheckbox';

describe('<FormCheckbox />', () => {
  it('Should not regress', () => {
    const tree = render(<FormCheckbox label="test label" />);
    expect(tree).toMatchSnapshot();
  });
});
