import React from 'react';
import { shallow } from 'enzyme';

import CompanyPage from 'components/CompanyPage';

describe('<CompanyPage />', () => {
  it('should not regress', () => {
    const config = {
      params: {
        id: '1',
      },
    };
    const tree = shallow(
      <CompanyPage match={config}>
        <div>a</div>
      </CompanyPage>,
    );
    expect(tree.children.length).toBe(1);
    expect(tree).toMatchSnapshot();
  });
});
