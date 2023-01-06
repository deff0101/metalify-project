import {useState, useEffect} from 'react'
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { db } from '../config/firebaseConfig';

function useGetFirebasePlaylist(uid) {
    const [data,setData]= useState([]);

    useEffect(() => {
        const q = collection(db, `playlist-test/${uid}/playlist`);
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const playlist = [];
            querySnapshot.forEach((doc) => {
                playlist.push(doc.data().name);
            });
            setData(playlist)
        });
        return () => {
            unsubscribe()
        }
    }, [])
   return data
}

export default useGetFirebasePlaylist
