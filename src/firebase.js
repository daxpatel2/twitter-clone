import {initializeApp} from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from '@firebase/firestore';


const firebaseConfig = {
  apiKey: 'AIzaSyBL0B7ohmTz61fzWyzikdJQA0-6jC-OZcs',
  authDomain: 'twitter-clone-2e8bd.firebaseapp.com',
  databaseURL: 'https://twitter-clone-2e8bd-default-rtdb.firebaseio.com',
  projectId: 'twitter-clone-2e8bd',
  storageBucket: 'twitter-clone-2e8bd.appspot.com',
  messagingSenderId: '187578400114',
  appId: '1:187578400114:web:2900ffec4b7087cae031eb',
  measurementId: 'G-E6GL1NCZRD'
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth(app);

