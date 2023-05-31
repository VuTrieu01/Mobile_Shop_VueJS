import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyADr_j8KTE3blJ6N7243Vat_mrUJ7ILsZs",
  authDomain: "mobile-shop-f6123.firebaseapp.com",
  projectId: "mobile-shop-f6123",
  storageBucket: "mobile-shop-f6123.appspot.com",
  messagingSenderId: "347549596173",
  appId: "1:347549596173:web:a06b6030eb27f776533344",
};

// Khởi tạo Firebase App
firebase.initializeApp(firebaseConfig);

// Khởi tạo Firestore
const db = firebase.database();

export default db;
