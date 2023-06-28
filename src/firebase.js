
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyC4O_qaoouo0rK2QXUIrM6aLJdxLnu6yTc",
  authDomain: "yash-react-portfolio.firebaseapp.com",
  projectId: "yash-react-portfolio",
  storageBucket: "yash-react-portfolio.appspot.com",
  messagingSenderId: "1031897632588",
  appId: "1:1031897632588:web:807f6a0c5ba6393e4249e9",
  measurementId: "G-YMSKC2LGD6"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);