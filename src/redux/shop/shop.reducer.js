// import SHOP_DATA from './shop.data'
import ShopActionType from './shop.types'

const INITIAL_STATE = {
  isFetching: false,
  collections : null,
  errorMessage: undefined
}

const shopReducer = (state=INITIAL_STATE, action) => {
  switch(action.type) {
    // case ShopActionType.UPDATE_COLLECTIONS:
    //   return {
    //     ...state,
    //     collections: action.payload
    //   }
    case ShopActionType.FETCH_COLLECTIONS_START:
      return {
        ...state,
        isFetching: true
      }
    case ShopActionType.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        collections: action.payload,
        isFetching: false
      }
    case ShopActionType.FETCH_COLLECTIONS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload
      }
    default:
      return state;
  }
}

export default shopReducer;