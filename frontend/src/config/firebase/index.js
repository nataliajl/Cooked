import firebase from 'firebase'

import '@firebase/auth';
import '@firebase/firestore';
import '@firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAdIfZ--ZLBWMCHHnyV0PiGdlpboPdbCtQ",
    authDomain: "cooked-361f7.firebaseapp.com",
    projectId: "cooked-361f7",
    storageBucket: "cooked-361f7.appspot.com",
    messagingSenderId: "397984510608",
    appId: "1:397984510608:web:7dc8fcc40c1904e3f51e15",
    measurementId: "G-1E95R71NPM"  
};

firebase.initializeApp(firebaseConfig);

export {firebase};