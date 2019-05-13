import React from 'react';
import { shallow } from 'enzyme';
import { Route } from 'react-router-dom';
import { expect } from 'chai';

import App from 'containers/App';

describe('<App />', () => {
  it('should render some routes', () => {
    const renderedComponent = shallow(<App />);
    expect(renderedComponent.find(Route).length).not.to.equal(0);
  });
});
