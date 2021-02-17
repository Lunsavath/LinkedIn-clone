import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD-HOJOQU9yyh_28sYhYz8g749flewvinM",
  authDomain: "linkedin-clone-9bdf2.firebaseapp.com",
  projectId: "linkedin-clone-9bdf2",
  storageBucket: "linkedin-clone-9bdf2.appspot.com",
  messagingSenderId: "506017438976",
  appId: "1:506017438976:web:66c8c8d9e9d2b2b78727e5",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
