import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAPx3oTgxDjRrsIZF90XmZ90oM_CeNrNws",
  authDomain: "spectrenews-6cf1c.firebaseapp.com",
  projectId: "spectrenews-6cf1c",
  storageBucket: "spectrenews-6cf1c.appspot.com",
  messagingSenderId: "171988045024",
  appId: "1:171988045024:web:ec38c8678fd302ad049485",
  measurementId: "G-CS8BKFJFS3"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {
  auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword
};
