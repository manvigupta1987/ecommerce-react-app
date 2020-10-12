import ShopActionType from './shop.types';
import {firestore, convertCollectionSnapShotToMap} from '../../firebase/firebase.utils.js';

// export const updateShopCollections = (collections) => ({
//   type: ShopActionType.UPDATE_COLLECTIONS,
//   payload: collections
// })

export const fetchCollectionStart = () => ({
  type: ShopActionType.FETCH_COLLECTIONS_START
})

export const fetchCollectionSuccess = (collectionMap) => ({
  type: ShopActionType.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionMap
})

export const fetchCollectionFailure = (errorMessage) => ({
  type: ShopActionType.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage
})

export const fetchCollectionStartAsync = () => {
  return dispatch => {
    const collectionRef = firestore.collection('collections');
    dispatch(fetchCollectionStart());
    collectionRef.get()
    .then(snapShot => {
      const collectionMap = convertCollectionSnapShotToMap(snapShot)
      dispatch(fetchCollectionSuccess(collectionMap))
    })
    .catch(error=> dispatch(fetchCollectionFailure(error.message)));
  } 
}