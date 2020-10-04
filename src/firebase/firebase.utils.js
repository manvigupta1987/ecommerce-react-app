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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  'prompt': 'select_account',
  'login_hint': 'user@example.com'
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase; 