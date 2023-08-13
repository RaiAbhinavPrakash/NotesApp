import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBxk2nZdQZfAJAAh8Op31kGL0roPZSjQPI",
  authDomain: "todoapp-6d5b2.firebaseapp.com",
  projectId: "todoapp-6d5b2",
  storageBucket: "todoapp-6d5b2.appspot.com",
  messagingSenderId: "362440306190",
  appId: "1:362440306190:web:73fdab03b9c91c151b565f"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };