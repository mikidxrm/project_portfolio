import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyDQW6rjIRCSzBZJitufdC4Pj3fTG--KZGw",
  authDomain: "test-fire-daatbass.firebaseapp.com",
  projectId: "test-fire-daatbass",
  storageBucket: "test-fire-daatbass.appspot.com",
  messagingSenderId: "147588609718",
  appId: "1:147588609718:web:dc8381f22dc60dbf159817"
});

export default firebaseConfig;