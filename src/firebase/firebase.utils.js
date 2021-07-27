import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyBUJABs1_9VR9QmgTcvvxh-PgZQk_x7k7U",
  authDomain: "crowndb-6024e.firebaseapp.com",
  projectId: "crowndb-6024e",
  storageBucket: "crowndb-6024e.appspot.com",
  messagingSenderId: "462425498988",
  appId: "1:462425498988:web:48bf46a528aa535c77bf49",
  measurementId: "G-4QG3TGFG23",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
