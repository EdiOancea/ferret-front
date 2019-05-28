import React from 'react';
import { shallow } from 'enzyme';

import ViewCompanyPage from 'components/ViewCompanyPage';

describe('<ViewCompanyPage />', () => {
  it('should not regress', () => {
    const config = {
      params: {
        slug: '1',
      },
    };
    const tree = shallow(
      <ViewCompanyPage match={config}>
        <div> a </div>
      </ViewCompanyPage>,
    );
    expect(tree.children.length).toBe(1);
    expect(tree).toMatchSnapshot();
  });
});
