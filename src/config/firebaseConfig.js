
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider  } from "firebase/auth";
import {getFirestore,collection} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "spotify-playlist-107d3.firebaseapp.com",
  projectId: "spotify-playlist-107d3",
  storageBucket: "spotify-playlist-107d3.appspot.com",
  messagingSenderId: import.meta.env.VITE_FIREBASE_API_KEY,
  appId: import.meta.env.VITE_FIREBASE_APPID
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
const provider = new GoogleAuthProvider();

export const googleSignIn = () => {
        signInWithPopup(auth,provider).then(res => {
        }).catch(err=>{
        })
}
export const db = getFirestore(app)
export const userPlaylistRef = collection(db,'userPlaylist')
