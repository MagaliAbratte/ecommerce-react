import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyD0l1Wa88Q9F7LXcYHI7rrEcQJZJm1UKz4",
  authDomain: "estudio-crea.firebaseapp.com",
  projectId: "estudio-crea",
  storageBucket: "estudio-crea.appspot.com",
  messagingSenderId: "140528686298",
  appId: "1:140528686298:web:b3ba16e983886f847841e3"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore (app)