import React from 'react';
import { shallow } from 'enzyme';

import Input from 'components/Input';

describe('<Input />', () => {
  it('should not regress', () => {
    const props = {
      name: 'testName',
      label: 'testLabel',
      type: 'testType',
    };
    const tree = shallow(<Input {...props} />);
    expect(tree).toMatchSnapshot();
  });
});
