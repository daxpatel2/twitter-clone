import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBL0B7ohmTz61fzWyzikdJQA0-6jC-OZcs",
    authDomain: "twitter-clone-2e8bd.firebaseapp.com",
    databaseURL: "https://twitter-clone-2e8bd-default-rtdb.firebaseio.com",
    projectId: "twitter-clone-2e8bd",
    storageBucket: "twitter-clone-2e8bd.appspot.com",
    messagingSenderId: "187578400114",
    appId: "1:187578400114:web:21c886631c692702e031eb",
    measurementId: "G-4NN395DEJX"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;