import React,{useEffect,useState} from 'react'
import { LockClosedIcon} from '@heroicons/react/24/solid'

import { NavLink  } from 'react-router-dom'

//google
import {googleSignIn,userPlaylistRef,db} from '../../config/firebaseConfig'
import {
onSnapshot,
collection,
query,
getDocs,
where,
doc,
collectionGroup
} from 'firebase/firestore'

function Playlist({user}) {
    const [userPlaylist,setUserPlaylist]= useState([])
    const styleActive ='flex flex-col md:flex-row items-center md:space-x-2 md:hover:text-white md:text-white text-[#2bc77c]'
    const styleNotActive ='flex flex-col md:flex-row items-center md:space-x-2 md:hover:text-white'
    useEffect(() => {
        let unSubscribe;
            function getData(){
                const q = query(collection(db, `playlist-test/${user.uid}/playlist`));
                unSubscribe = onSnapshot(q, (querySnapshot) => {
                const playlist = [];
                querySnapshot.forEach((doc) => {
                    playlist.push(doc.data().name);
                });
                setUserPlaylist(playlist)
            });
            }
            if(user == null){
                setUserPlaylist([])
            }
            if(user !== null){
                getData()
            }
            return ()=>{
                unSubscribe?.()
            }
    }, [user])

    //  useEffect( () => {
    //     let cleanup=true
    //     async function getData(){
    //         const userRef = doc(db,"playlist-test",user.uid)
    //         const collectionRef = collection(userRef,"playlist")
    //         const q = await query(collectionRef)
    //         const users = await getDocs(q)
    //         users.forEach(user=>{
    //             setUserPlaylist(prev => [...prev ,user.data().name])
    //         })
    //     }
    //     if(user==null && cleanup){
    //         console.log("no data")
    //         setUserPlaylist([])
    //     }
    //     if(user !== null && cleanup){
    //         getData()
    //     }
    //    return ()=>{
    //        console.log("clean up")
    //        cleanup=false;
    //    }
    // }, [user])
    
    if(user==null){
        return (
            <>
            {/* <LockOpenIcon className='z-1 w-4 h-4 inset-0 m-auto' />  */}
                <div className="relative hidden md:h-[359px] md:block md:space-y-3 md:overflow-y-scroll hover:bg-[#1d1d1d] md:px-4 md:scrollbar scrollbar-thumb-gray-400
                    hover:scrollbar-thumb-gray-300 [&>:not(button):not(div)]:blur-sm group hover:rounded-lg ease-in duration-200">
                    
                    <button 
                    onClick={googleSignIn}
                    className='z-[1] w-[70px] h-[40px] absolute m-auto inset-0 rounded-md text-white text-md font-[700] opacity-0 group-hover:opacity-100 group-hover:bg-spotify-green-light ease-in duration-200' >
                       Login
                        </button>
                        <div className='inset-x-0 mx-auto absolute flex flex-col items-center pt-20 group-hover:blur-sm'>
                            <LockClosedIcon className='w-8 h-8' />
                            <span>Login to create playlist</span>
                        </div>
                    <p>playlist</p>
                </div>
            </>
        )
    } 
    return (
        <>
            <div className="relative hidden md:h-[359px] md:block md:space-y-3 md:overflow-y-scroll md:px-4 md:scrollbar scrollbar-thumb-gray-400
                    hover:scrollbar-thumb-gray-300">
                    {userPlaylist && userPlaylist.map((item,i)=>{
                        return <NavLink  to={`/playlist/${item}`} key={i}
                                className={({isActive}) => isActive ? styleActive : styleNotActive } >
                                        <p className='m-0'>{item}</p> 
                                </NavLink>
                    })}
                    
            </div>
        </>
        )
    
}
export default Playlist
