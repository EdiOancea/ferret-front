import React from 'react';
import { render } from 'enzyme';
import TextInput from 'components/TextInput';

describe('<TextInput />', () => {
  it('Should not regress', () => {
    const props = {
      type: 'testType',
      label: 'testLabel',
      name: 'testName',
      field: { value: { test: 'test' } },
    };
    const tree = render(<TextInput {...props} />);
    expect(tree).toMatchSnapshot();
  });
});
