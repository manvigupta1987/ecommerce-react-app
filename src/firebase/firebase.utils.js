import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
  apiKey: "AIzaSyBJDFzSXxExTHJyJgNdrH5fZRC2NMtIc58",
  authDomain: "ecommerce-app-18a97.firebaseapp.com",
  databaseURL: "https://ecommerce-app-18a97.firebaseio.com",
  projectId: "ecommerce-app-18a97",
  storageBucket: "ecommerce-app-18a97.appspot.com",
  messagingSenderId: "189700966573",
  appId: "1:189700966573:web:5fb22073be670ac10e1e24",
  measurementId: "G-4YHHX46RN4"
}

export const createUserProfileDocument = async(userAuth, additionalData) => {
  if(!userAuth) return;

  // it returns a document reference. When we call .get() on the document reference, it returns the snapshot object. 
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  //.exists property indicates if there is any data present for the userID in the firestore or not. If it doesnt exist, we want to save the 
  // user profile in the firestore database. 
  if(!snapshot.exists) {
    const {displayName, email} = userAuth;
    const createAt = new Date()
    try {
      // create the object in the firestore database.
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData
      })
    } catch(error) {
      console.log('error creating user', error.message);
    };
  }
  return userRef;
}
//Changes: To add data in the firestore.
export const addCollectionAndDocuments = async(collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);

  // we are using batch here because .set() calls run one at a time.
  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    //.doc() with empty key, returns a doc reference with random unique key. 
    const newDocRef = collectionRef.doc()
    batch.set(newDocRef, obj)
  });
  // it fires the batch operation and returns a promise. When commit succeeds, it returns null value. 
  return await batch.commit()
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const convertCollectionSnapShotToMap = collections => {
  const transformedCollections = collections.docs.map( doc => {
    const {title, items} = doc.data()

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    }
  })
  return transformedCollections.reduce((accumaltor, collection ) => {
    accumaltor[collection.title.toLowerCase()] = collection;
    return accumaltor;
  }, {})
}
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  'prompt': 'select_account',
  'login_hint': 'user@example.com'
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase; 