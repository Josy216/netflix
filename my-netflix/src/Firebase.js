import { initializeApp } from "firebase/app";

import { createUserWithEmailAndPassword,
    
    signInWithEmailAndPassword,
signOut } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { addDoc,collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";
const firebaseConfig = {
  apiKey: "AIzaSyDl8NayxM4c1VFpcQ5iwhO0SCoZzFWG-1c",
  authDomain: "netflix-clone-222e3.firebaseapp.com",
  projectId: "netflix-clone-222e3",
  storageBucket: "netflix-clone-222e3.firebasestorage.app",
  messagingSenderId: "322933929052",
  appId: "1:322933929052:web:7aff4f211fba0f27226299"
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