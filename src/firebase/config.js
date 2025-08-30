
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCL7CgVZfFFP8ptV4MPQC6jN0pQSq8CgR8",
  authDomain: "plataforma-escolar-pi4.firebaseapp.com",
  projectId: "plataforma-escolar-pi4",
  storageBucket: "plataforma-escolar-pi4.firebasestorage.app",
  messagingSenderId: "450690102608",
  appId: "1:450690102608:web:fd5def23c3322754332855"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export { auth, db };