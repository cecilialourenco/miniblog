import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBQNpr3DhKKrjxZJZkRamndobGqG9D-C2M",
  authDomain: "miniblog-80ef4.firebaseapp.com",
  projectId: "miniblog-80ef4",
  storageBucket: "miniblog-80ef4.appspot.com",
  messagingSenderId: "526456807735",
  appId: "1:526456807735:web:f12004847a479a36237ab2",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;
