import firebase from 'firebase/compat/app';
import { motion } from 'framer-motion';
import 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCStJjbwT51Hy22xtRwzyrlX1cPI6xmWjM",
    authDomain: "edvisor-f75d2.firebaseapp.com",
    projectId: "edvisor-f75d2",
    storageBucket: "edvisor-f75d2.appspot.com",
    messagingSenderId: "674243332568",
    appId: "1:674243332568:web:8485176ba6ca8c40dc8aad",
    measurementId: "G-5PPBMLH777"
};

export const app = firebase.initializeApp(firebaseConfig);
export const db = getFirestore(app);
