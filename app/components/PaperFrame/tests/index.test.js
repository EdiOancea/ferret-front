import React from 'react';
import { render } from 'enzyme';
import PaperFrame from 'components/PaperFrame';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

describe('<PaperFrame />', () => {
  it('should not regress', () => {
    const tree = render(
      <PaperFrame text="test text" icon={<LockOutlinedIcon />}>
        <div>test</div>
      </PaperFrame>,
    );
    expect(tree.children.length).toEqual(1);
    expect(tree).toMatchSnapshot();
  });
});
