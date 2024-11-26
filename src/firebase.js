import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBNRCIbBhvcCQp25YrN-y4HU5JpA2oK1JI",
  authDomain: "citu-12d4c.firebaseapp.com",
  projectId: "citu-12d4c",
  storageBucket: "citu-12d4c.firebasestorage.app",
  messagingSenderId: "464201366503",
  appId: "1:464201366503:web:131da835e30a3aebc8db42",
  measurementId: "G-TH06G6QM3Y"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

export { auth, database };