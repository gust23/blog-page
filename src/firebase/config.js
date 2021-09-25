import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDdNT7XUa4ql4zn2OoIszurbuRAATjpynY',
  authDomain: 'vue-firebase-516e9.firebaseapp.com',
  projectId: 'vue-firebase-516e9',
  storageBucket: 'vue-firebase-516e9.appspot.com',
  messagingSenderId: '677927298834',
  appId: '1:677927298834:web:0201e12fad2d143338b5cb',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
const db = firebaseApp.firestore();
export { db, timestamp };
