import React from 'react';
import { shallow } from 'enzyme';
import { Directory } from './director.component.jsx';

it('should render Directory component', () => {
  expect(shallow(<Directory sections={[]} />)).toMatchSnapshot();
});