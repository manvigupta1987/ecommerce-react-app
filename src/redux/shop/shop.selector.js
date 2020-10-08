import {createSelector} from 'reselect';

//input selector --> takes complete state and returns piece of the state. 
const selectShop = state => state.shop;

//createSelector takes two argument : first an array of the input selectors, 
// second: an function that would return the value that you want from this selector. This function
// takes the input return from the inputSelector (first parameter)
export const selectShopCollections = createSelector(
  [selectShop],
  shop => shop.collections
)