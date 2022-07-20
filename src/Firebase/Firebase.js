
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAlO3II86mxNbr3kdki4SkGtU2tILfI1eU",
  authDomain: "eduardotecnology.firebaseapp.com",
  projectId: "eduardotecnology",
  storageBucket: "eduardotecnology.appspot.com",
  messagingSenderId: "1059470531167",
  appId: "1:1059470531167:web:d5fd84b5bd87f4c493d9ea"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);