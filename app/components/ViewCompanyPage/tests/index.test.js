import React from 'react';
import { shallow } from 'enzyme';

import ViewCompanyPage from 'components/ViewCompanyPage';

describe('<ViewCompanyPage />', () => {
  it('should not regress', () => {
    const tree = shallow(
      <ViewCompanyPage>
        <div> a </div>
      </ViewCompanyPage>,
    );
    expect(tree.children.length).toBe(1);
    expect(tree).toMatchSnapshot();
  });
});
