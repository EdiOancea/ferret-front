import React from 'react';
import { shallow } from 'enzyme';

import SignInPage from 'containers/SignInPage';

describe('<SignInPage />', () => {
  it('should not regress', () => {
    const tree = shallow(
      <SignInPage>
        <div> a </div>
      </SignInPage>,
    );
    expect(tree.children.length).toBe(1);
    expect(tree).toMatchSnapshot();
  });
});
