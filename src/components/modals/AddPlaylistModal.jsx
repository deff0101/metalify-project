import { useState } from 'react'
import { closeAddPlaylistModal } from "../../features/services/modalSlice"
import {useDispatch} from 'react-redux'
import { db } from '../../config/firebaseConfig'
import { doc, getDoc,collection,addDoc,setDoc } from 'firebase/firestore'

function AddPlaylistModal({user}) {
    const dispatch = useDispatch()
    const [name,setName]=useState("")

    const handleClick = async (e) =>{
        const docRef = doc(db, "playlist-test", user.uid);
        const docSnap = await getDoc(docRef);
        const colRef=collection(docRef,"playlist")
        console.log(name.length)
        if(name.length >= 5 && name.length <= 15){
            if (docSnap.exists()) {
                console.log("doc exist")
                try {
                    await addDoc(colRef,{
                        name,
                        songs:null
                    })
                    dispatch(closeAddPlaylistModal())
                }catch (error) {
                    console.log(error)
                }
            } else {
                console.log("doc not exist")

                try {
                    await setDoc(doc(db, "playlist-test", user.uid),{});
                    await addDoc(colRef,{
                        name,
                        songs:null
                    })
                    dispatch(closeAddPlaylistModal())
                }catch (error) {
                    console.log(error)
                }
            }
        }else{
            alert("error name must more than 4 word max 15 word")
        }
        
       
    }
    return (
        <div onClick={()=>dispatch(closeAddPlaylistModal()) } className='fixed w-screen h-screen z-30 bg-[#00000090] flex justify-center items-center'>
            <div onClick={e=> e.stopPropagation()} className='relative text-white bg-dark-gray flex flex-col w-[300px] h-[180px] rounded-lg p-4'>
                <h2 className=''>Add Playlist</h2>
                <div className="decoration-none w-full border-b border-text-gray mt-1 mb-4"></div>
                    <input className={`bg-nav-black rounded-md w-full text-lg px-4 outline outline-1 ${name.length >= 5 && name.length <= 15 ?`focus:outline-spotify-green-light` :`focus:outline-red-500`} ease-in duration-100`}
                    type="text" onChange={(e) => setName(e.target.value)} placeholder="playlist name" value={name} />
                <div className='absolute flex self-end gap-x-2 bottom-4'>
                    <button className='px-4 py-1 bg-spotify-green hover:bg-spotify-green-light rounded-md  ease-in duration-100' onClick={handleClick}> Add </button>
                    <button className='px-4 py-1  rounded-md border hover:text-black hover:bg-white  ease-in duration-100' onClick={()=>dispatch(closeAddPlaylistModal()) }> Close</button>
                </div>
            </div>
        </div>
    )
}

export default AddPlaylistModal
