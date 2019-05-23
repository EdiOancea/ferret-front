import React from 'react';
import { shallow } from 'enzyme';

import AddCompanyPage from 'components/AddCompanyPage';

describe('<AddCompanyPage />', () => {
  it('should not regress', () => {
    const tree = shallow(
      <AddCompanyPage>
        <div> a </div>
      </AddCompanyPage>,
    );
    expect(tree.children.length).toBe(1);
    expect(tree).toMatchSnapshot();
  });
});
