import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCHiESJdVBUzgNk21o0iJ56mgtG3MzvUJo",
  authDomain: "proyectocoderreact-2dbaa.firebaseapp.com",
  projectId: "proyectocoderreact-2dbaa",
  storageBucket: "proyectocoderreact-2dbaa.appspot.com",
  messagingSenderId: "262826203828",
  appId: "1:262826203828:web:b0d998914c0f6c3da215e1"
};

// esto inicia firebase
const app = initializeApp(firebaseConfig);

//exporto mi base de datos a mi app.
export const db = getFirestore(app);