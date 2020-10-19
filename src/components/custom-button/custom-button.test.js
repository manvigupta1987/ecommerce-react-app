import React from 'react';
import { shallow } from 'enzyme';
import CustomButton from './custom-button.component.jsx';

it('should render Directory component', () => {
  expect(shallow(<CustomButton />)).toMatchSnapshot();
});