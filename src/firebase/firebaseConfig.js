import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBx0YNKyc2X9QZ4yKZvg39RfPnuQsDF3Bo",
  authDomain: "journalapp-8eb2d.firebaseapp.com",
  projectId: "journalapp-8eb2d",
  storageBucket: "journalapp-8eb2d.appspot.com",
  messagingSenderId: "348892469275",
  appId: "1:348892469275:web:d38276a10a18979f9500be",
};

firebase.initializeApp(firebaseConfig);

// inicializar conexion firebase a firestore -> db firebase
const db = firebase.firestore();

// auth with google
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
