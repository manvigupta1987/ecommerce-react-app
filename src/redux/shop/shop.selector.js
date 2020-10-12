import {createSelector} from 'reselect';
import memoize from 'lodash.memoize';

//input selector --> takes complete state and returns piece of the state. 
const selectShop = state => state.shop;

//createSelector takes two argument : first an array of the input selectors, 
// second: an function that would return the value that you want from this selector. This function
// takes the input return from the inputSelector (first parameter)
export const selectShopCollections = createSelector(
  [selectShop],
  shop => shop.collections
)

export const selectCollectionsForPreview = createSelector(
  [selectShopCollections],
  collections => collections? Object.values(collections): []
)

// This function is not memoized due to collectionUrlParam being passed as mapStateToProps running whenever state changes and calling a new
// instance of selectCollection. Since collectionUrlParam is teh dynamic param, so to to memoize selectCollection we actually have to memoize the whole function using a memoize helper function

//By wrapping this function is memoize, we're saying that whenever this function gets called and receives collectionUrlParam, I want to memoize 
//the return of this function (in this case we return a selector). If this function gets called again with the same collectionUrlParam, 
//don't rerun this function because we'll return the same value as last time, which we've memoized so just return the selector that's been stored.
export const selectCollection = memoize((collectionUrlParam) => 
createSelector(
  [selectShopCollections],
  collections => (collections? collections[collectionUrlParam] : null)
));

export const selectIsCollectionFetching = createSelector(
  [selectShop],
  shop => shop.isFetching
);

export const selectIsCollectionLoaded = createSelector(
  [selectShop],
  shop => !!shop.collections
)