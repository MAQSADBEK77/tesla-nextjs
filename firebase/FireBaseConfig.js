import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const FirebaseConfig = {
  apiKey: "AIzaSyA8JO3cTA13EbHpMqhHJ_gKiWX86CCY7NU",
  authDomain: "tesla-3cc10.firebaseapp.com",
  projectId: "tesla-3cc10",
  storageBucket: "tesla-3cc10.appspot.com",
  messagingSenderId: "701330521253",
  appId: "1:701330521253:web:8d7bc586ed316217c6214c",
  measurementId: "G-PQZQV0R22V",
};

const app = initializeApp(FirebaseConfig);

export const auth = getAuth(app);
