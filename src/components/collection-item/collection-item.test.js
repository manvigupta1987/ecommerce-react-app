import React from 'react';
import { shallow } from 'enzyme';
import { CollectionItem } from './collection-item.component.jsx';

describe('CollectionItem Component', ()=> {
  let wrapper;
  let mockAddItems;
  let imageUrl = 'testing'
  let name = 'testing'
  
  beforeEach(() => {
    mockAddItems = jest.fn()
    const mockProps = {
      item: {
        imageUrl: imageUrl,
        name: name,
        price: '$23'
      },
      addItems: mockAddItems 
    }
    wrapper = shallow(<CollectionItem {...mockProps}/>)
  })
  it('should render CollectionItem component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('ImageContainer should have imageUrl as prop', () => {
    expect(wrapper.find('ImageContainer').prop('imageUrl')).toBe(imageUrl);
  });

  it('NameContainer should have name title', () => {
    expect(wrapper.find('NameContainer').text()).toEqual(name);
  });

  it('CustomButtonContainer should call addItems ', () => {
    wrapper.find('CustomButtonContainer').simulate('click')
    expect(mockAddItems).toHaveBeenCalled();
  });
})

