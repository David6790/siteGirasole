import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD-0c6w3ijUnxyY6G1eQiDFRQJzli2KsNw",
  authDomain: "il-girasole-strasbourg.firebaseapp.com",
  projectId: "il-girasole-strasbourg",
  storageBucket: "il-girasole-strasbourg.appspot.com",
  messagingSenderId: "199487433056",
  appId: "1:199487433056:web:f0afc8bd848424e1d2d605",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
