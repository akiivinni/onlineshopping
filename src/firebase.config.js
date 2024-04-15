
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import {createUserWithEmailAndPassword} from "firebase/auth";
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyA5wSiSOuwLgX_Pin7qQL2uGlAJwGTIe8w",
  authDomain: "abcfurnitures-7e4e1.firebaseapp.com",
  projectId: "abcfurnitures-7e4e1",
  storageBucket: "abcfurnitures-7e4e1.appspot.com",
  messagingSenderId: "1026662582750",
  appId: "1:1026662582750:web:d12d8eb673b76c31c9754f"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db= getFirestore(app)
export const storage = getStorage(app)


export default app;