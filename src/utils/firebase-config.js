import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA6WzxKZTpHEeMqw0uM78BRkE87jLCmIew",
  authDomain: "react-netflix-clone-ea386.firebaseapp.com",
  projectId: "react-netflix-clone-ea386",
  storageBucket: "react-netflix-clone-ea386.appspot.com",
  messagingSenderId: "198722712149",
  appId: "1:198722712149:web:8d6b17ed135f8d60475adc",
  measurementId: "G-DL7BMLB4H2"
};


const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);