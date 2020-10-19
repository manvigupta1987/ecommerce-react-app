import React from 'react';
import {shallow} from 'enzyme';
import {CollectionPreview} from './collection-preview.component.jsx'

describe('Collection Preview Component', ()=> {
  let wrapper;
  let mockMatch;
  let mockHistory;
  let mockRouteName = 'hats';
  let mockTitle = 'testing'

  beforeEach(()=> {
    mockMatch = {
      path: '/hats'
    }
    mockHistory = {
      push: jest.fn()
    }
    const mockProps = {
      title: 'testing', 
      items: [], 
      match: mockMatch, 
      routeName: mockRouteName, 
      history: mockHistory
    }
    wrapper = shallow(<CollectionPreview {...mockProps} />)
  })

  it('history push called when click on title', ()=>{
    wrapper.find('TitleContainer').simulate('click')
    expect(mockHistory.push).toHaveBeenCalledWith(`${mockMatch.path}/${mockRouteName}`)
  })

  it('expect to render the title', ()=>{
    expect(wrapper.find('TitleContainer').text()).toEqual(mockTitle.toUpperCase())
  })
});