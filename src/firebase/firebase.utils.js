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
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  if(!snapshot.exists) {
    const {displayName, email} = userAuth;
    const createAt = new Date()
    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData
      })
    } catch(error) {
      console.log(error)
    };
  }
  return userRef;
}
//Changes: To add data in the firestore.
export const addCollectionAndDocuments = async(collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc()
    batch.set(newDocRef, obj)
  });

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