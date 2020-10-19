
import React from 'react';
import { shallow } from 'enzyme';
import {MenuItem} from './menu-item.component';

describe('MenuItem component testing', () => {
  let mockSection = {
    size: 'large',
    linkUrl: '/hats',
    imageUrl: 'testImage',
    title: 'testing'
  }
  let wrapper;
  let mockHistory;

  beforeEach(()=>{
    mockHistory = {
      push: jest.fn()
    }

    const mockProps = {
      section: mockSection,
      history: mockHistory
    }

    wrapper = shallow(<MenuItem {...mockProps} />)
  });

  it('MenuItem Snapshot testing', ()=> {
    expect(wrapper).toMatchSnapshot();
  })

  it('History push should be called when onClick event happens', ()=> {
    wrapper.find('MenuItemContainer').simulate('click')
    expect(mockHistory.push).toHaveBeenCalledWith(mockSection.linkUrl)
  })

  it('It should pass the value of size to the MenuItemContainer', ()=> {
    expect(wrapper.find('MenuItemContainer').prop('size')).toBe(mockSection.size);
  })

  it('Background image should have a imageUrl prop', ()=> {
    expect(wrapper.find('BackgroundImageContainer').prop('imageUrl')).toBe(mockSection.imageUrl);
  })

  it('expect title container to have some text', ()=> {
    expect(wrapper.find('TitleContainer').text()).toEqual(mockSection.title.toUpperCase());
  })
})