import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDgpyUmcNlcN_rWzqScC2bpfF4diMirQQQ",

    authDomain: "western-diorama-288520.firebaseapp.com",
  
    projectId: "western-diorama-288520",
  
    storageBucket: "western-diorama-288520.appspot.com",
  
    messagingSenderId: "812970988459",
  
    appId: "1:812970988459:web:7e4dcf342f762dcb8a38ee",
  
    measurementId: "G-SF1T3F64QB"
};


initializeApp(firebaseConfig);
export const firebaseAuth = getAuth();