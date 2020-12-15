import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAk0vBJk1cCmO1sot1EpzTJ_x-2I-GpRrM",
  authDomain: "imessage-clone-ef82e.firebaseapp.com",
  databaseURL: "https://imessage-clone-ef82e.firebaseio.com",
  projectId: "imessage-clone-ef82e",
  storageBucket: "imessage-clone-ef82e.appspot.com",
  messagingSenderId: "1049755321125",
  appId: "1:1049755321125:web:1ff4389b7edaa64de5d0cc",
  measurementId: "G-3MG4RWNYHL"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider(); //for auth signup

export { auth, provider };
export default db;
