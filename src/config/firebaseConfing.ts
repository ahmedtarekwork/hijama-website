import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCWYiKVaazuMcGgUHyY1FQn6rXYQSyLKEA",
  authDomain: "tarek-hijama.firebaseapp.com",
  projectId: "tarek-hijama",
  storageBucket: "tarek-hijama.appspot.com",
  messagingSenderId: "957452979116",
  appId: "1:957452979116:web:0238bf594ca9b6e1f8c809",
};

initializeApp(firebaseConfig);
export const db = getFirestore();
