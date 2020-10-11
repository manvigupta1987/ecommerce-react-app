import ShopActionType from './shop.types'

export const updateShopCollections = (collections) => ({
  type: ShopActionType.UPDATE_COLLECTIONS,
  payload: collections

})