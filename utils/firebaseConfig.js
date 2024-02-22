import {getFirestore} from "firebase/firestore"
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: 'AIzaSyBq4CNk86XdmVZAd-mDIeb62zAgOwpII_s',
  authDomain: "ecomosh-efd65.firebaseapp.com",
  projectId: "ecomosh-efd65",
  storageBucket: "ecomosh-efd65.appspot.com",
  messagingSenderId: "466888659954",
  appId: "1:466888659954:web:7055b6d80b33f4ee66d16b"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth=getAuth(app);