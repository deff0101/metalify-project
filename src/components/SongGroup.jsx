import { MinusCircleIcon } from '@heroicons/react/24/outline'
import { PauseIcon, PlayIcon,FolderPlusIcon } from '@heroicons/react/24/solid'
import { setActiveSong,playPause,addPlaylistSong,addFromSearch } from '../features/services/playerSlice'
import { useDispatch,useSelector } from 'react-redux'
import PlayGif from '../../src/assets/music.gif'
import {useState,useRef,useEffect} from 'react'
import { db } from '../config/firebaseConfig';
import { collection, query, where, getDocs,updateDoc,arrayUnion, } from 'firebase/firestore'

function SongGroup({song,i,user}) {
    
    const ref=useRef()
    const dispatch=useDispatch();
    const [isActive,setIsActive] = useState(false)
    const [playlist,setPlaylist]= useState([])
    const {isPlaying,activeSong,songQueue,recentPlay,playlistSongId} = useSelector(state => state.player)
    const handlePlay = (song,i) =>{
        dispatch(playPause(true));
        dispatch(setActiveSong({song,i}))
    }
    const handlePause = () => {
        dispatch(playPause(false));
      };

    // get data playlist from firebase
    const getDataCollection = async(name)=>{
        const q = collection(db, `playlist-test/${user.uid}/playlist`);
        const querySnapshot = await getDocs(q);
        let arr=[]
        let songs=[]
        if(!name){
            querySnapshot.forEach((doc) => {
                arr.push(doc.data().name)
            });
            return arr;
        }else if(name){
            querySnapshot.forEach((doc) => {
                doc.data().name === name && songs.push(doc.data().songs)
            });
            return songs
        }
    }

    // this useEffect exist for initialize playlist state, to conditional render FolderPlusIcon components
    useEffect(() => {
        const getPlaylist = async()=>{
            setPlaylist(await getDataCollection())
        }
        if(user) getPlaylist()
    }, [user])
    const handleEllipsis=async()=>{
        setIsActive(prev=>!prev)
        
    }
    const handleAddSong= async (playlistName,song) =>{
       const [songs] = await getDataCollection(playlistName)
       console.log(songs,"get song")
       if(songs.length >= 4){
        alert("Due to API limit, you cannot add another songs")
       }else{
            const key=song.key
            if(playlistSongId === null){
                console.log("first if")
                const q = query(collection(db, `playlist-test/${user.uid}/playlist`),where("name", "==", playlistName ));
                let docRef=await getDocs(q)
                let [ref]=docRef.docs.map(d=> d.ref)
                await updateDoc(ref,{
                    songs:arrayUnion(song.key)
                })
            }else{
                console.log("last else if")
                dispatch(addFromSearch({key,playlistName}));
                dispatch(addPlaylistSong({song,playlistName}));
                console.log("you added :", song)
                const q = query(collection(db, `playlist-test/${user.uid}/playlist`),where("name", "==", playlistName ));
                let docRef=await getDocs(q)
                let [ref]=docRef.docs.map(d=> d.ref)
                await updateDoc(ref,{
                    songs:arrayUnion(song.key)
                })
            }
        }
    }
    useEffect(() => {
        const checkIfClickedOutside = e => {
          // If the menu is open and the clicked target is not within the menu,
          // then close the menu
          if (isActive && ref.current && !ref.current.contains(e.target)) {
            setIsActive(false)
          }
        }
        document.addEventListener("mousedown", checkIfClickedOutside)
        return () => {
          // Cleanup the event listener
          document.removeEventListener("mousedown", checkIfClickedOutside)
        }
      }, [isActive])
    return (
        <>
            <button className='relative w-full md:w-[calc(100%-100px)] md:hover:bg-[hsla(0,0%,100%,.1)] rounded-md group md:p-[5px] text-gray-400 md:pl-3 md:pr-0 pr-4' key={i}>
                <div className='grid md:grid-cols-[16px,32px,1fr,16px] grid-cols-[16px,32px,1fr,16px,16px] items-center gap-x-4'>
                    {isPlaying && activeSong?.key === song?.key
                    ? 
                    <img src={PlayGif} className='md:group-hover:hidden' /> 
                    :
                    <span className='md:group-hover:hidden'>{i+1}</span>
                    }
                    <div className='md:hidden group-hover:block h-4 w-4 text-white order-4 md:order-none'>
                            {isPlaying && activeSong?.key === song?.key ?
                            <PauseIcon onClick={handlePause} className='w-full h-full' /> :
                            <PlayIcon onClick={()=>handlePlay(song,i)} className='w-full h-full' /> 
                            }
                    </div>
                    <img className='w-8 h-8' src={song?.images?.coverart} alt="coverart" />
                    <div className='flex flex-col text-left leading-5 overflow-hidden'>
                        <span className={isPlaying && activeSong?.key === song?.key ? "truncate text-spotify-green-light"  : "truncate text-white"}>{song?.title}</span>
                        <span className=''>{song?.subtitle}</span>
                    </div>
                    {playlist.length > 0 &&
                        <div onClick={handleEllipsis} className="hover:text-spotify-green-light h-5 order-5 md:order-none">
                            <FolderPlusIcon className='h-full'/>
                        </div>
                    }

                    {/* modals for add song to playlist */}
                    {isActive &&
                        <div ref={ref} className='bg-[rgb(48,48,48)] text-white absolute w-[100px] right-7 bottom-[20px] text-sm flex flex-col gap-2 p-[2px] rounded-[5px]'>
                            {playlist?.map((name,i)=><p key={i} onClick={()=>handleAddSong(name,song)} className='hover:bg-[hsla(0,0%,100%,.1)] rounded-[5px]'>{name}</p> )}
                        </div>
                    }
                </div>
            </button>
        </>
    )
}

export default SongGroup
