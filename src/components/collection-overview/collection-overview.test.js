import React from 'react';
import { shallow } from 'enzyme';
import { CollectionOverview } from './collection-overview.compnents.jsx';

it('should render CollectionsOverview component', () => {
  expect(shallow(<CollectionOverview collections={[]} />)).toMatchSnapshot();
});
