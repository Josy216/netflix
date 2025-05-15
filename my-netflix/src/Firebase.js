import { initializeApp } from "firebase/app";

import { createUserWithEmailAndPassword,
    
    signInWithEmailAndPassword,
signOut } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { addDoc,collection, getFirestore } from "firebase/firestore";

const FIRE_KEY = import.meta.env.VITE_FIRE_KEY;
const APP_KEY = import.meta.env.VITE_APP_KEY;
const MESSAGE_KEY = import.meta.env.VITE_MESSAGE_KEY;
const AUTO_KEY = import.meta.env.VITE_AUTO_KEY;
const STORAGE_KEY = import.meta.env.VITE_STORAGE_KEY;
const PROJECTED_KEY = import.meta.env.VITE_PROJECTED_KEY;
import { toast } from "react-toastify";
const firebaseConfig = {
  apiKey: FIRE_KEY,
  authDomain: AUTO_KEY,
  projectId: PROJECTED_KEY,
  storageBucket: STORAGE_KEY,
  messagingSenderId: MESSAGE_KEY,
  appId:  APP_KEY 
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const signup = async (name, email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const  user = userCredential.user;
    await  addDoc(collection(db, "users"), {
      uid: user.uid,
      name: name,
      email: email,
      password: password,
      authProvider: "local"
    }); 
  } catch (error) {
    console.error("Error signing up:", error);
    toast.error("Error signing up:", error.message);
  }
}

const login = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log("User logged in:", user);
    toast.success("User logged in:", user);
  } catch (error) {
    console.error("Error logging in:", error);
    toast.error("Error logging in:", error.message);
  }
}

const logout = () => {
  signOut(auth);
};
export {auth, db, login, signup, logout}