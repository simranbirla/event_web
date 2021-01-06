// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDWqBzA4aJqpDjuXrp2DHLhx8KNupvAnDY",
  authDomain: "events-b6917.firebaseapp.com",
  projectId: "events-b6917",
  storageBucket: "events-b6917.appspot.com",
  messagingSenderId: "788409701464",
  appId: "1:788409701464:web:0835239f15376e1f8ca62d",
  measurementId: "G-731Z5CNYSL",
});

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
