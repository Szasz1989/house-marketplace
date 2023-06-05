// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCjZV4lqdb_d9CIYajuN5GmXe5-mlkmdTw',
  authDomain: 'house-marketplace-app-1de2b.firebaseapp.com',
  projectId: 'house-marketplace-app-1de2b',
  storageBucket: 'house-marketplace-app-1de2b.appspot.com',
  messagingSenderId: '754543716594',
  appId: '1:754543716594:web:34aff6ff2f72a21071486b',
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();
