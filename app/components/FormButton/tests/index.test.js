import React from 'react';
import { render } from 'enzyme';
import FormButton from 'components/FormButton';

describe('<FormButton />', () => {
  it('should not regress', () => {
    const tree = render(<FormButton text="test text" />);
    expect(tree).toMatchSnapshot();
  });
});
