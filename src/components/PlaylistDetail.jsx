import { useEffect, useState } from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import { PlayIcon,PauseIcon, } from '@heroicons/react/24/solid'
import { HeartIcon,MinusCircleIcon,TrashIcon } from '@heroicons/react/24/outline'
import PlayGif from '../../src/assets/music.gif'
import { BeatLoader } from 'react-spinners'

//redux
import { useDispatch,useSelector } from 'react-redux';
import { addPlaylistSongId, setPlaylistData,removePlaylistSong,addPlaylistSong,setActiveSong,playPause } from '../features/services/playerSlice'

//google
import { collection, query, where, onSnapshot,getDocs,updateDoc,arrayUnion,arrayRemove, deleteDoc} from "firebase/firestore";
import { db } from '../config/firebaseConfig';

//redux / shazam
import { useLazyGetSongQuery,useGetRelatedSongQuery } from '../features/services/shazamCore';


function PlaylistDetail({user}) {    
    //state
    const [currentPlaylist,setCurrentPlaylist]= useState(null)

    // react-router
    const {playlistName}=useParams();
    const navigate=useNavigate()
    
    //redux
    const dispatch=useDispatch()
    const {playlistSongId,playlistData,activeSong,isPlaying,songQueue} = useSelector(state =>state.player)
    // const randomId=playlistSongId?.[playlistName]?.[0]
    // const{data,isFetching,error} = useGetRelatedSongQuery(randomId)
    const [trigger,result] = useLazyGetSongQuery()
    console.log("playlist data redux",playlistData)
    console.log("playlist id redux",playlistSongId)
    // console.log(queryFn,"queryfn")
    console.log(songQueue,"queue")
    let songList;
    if(playlistData !== null){
        [songList] = playlistData?.filter(data=> data?.name === playlistName)
    }
    console.log(activeSong)
    const handlePlay = (song,data,i) =>{
        dispatch(playPause(true));
        dispatch(setActiveSong({song,data,i}))
        setCurrentPlaylist(playlistName)
    }
    const handlePause = () => {
        dispatch(playPause(false));
        setCurrentPlaylist(null)
      };
    const handleDeletePlaylist = async(name) =>{
        const q = query(collection(db, `playlist-test/${user.uid}/playlist`),where("name", "==", playlistName ));
        let docRef=await getDocs(q)
        let [ref]=docRef.docs.map(d=> d.ref)
        await deleteDoc(ref);
        navigate("/",{replace:true})
    }
    const handleAddPlaylistId = async (song,action)=>{
        try {
           if(action==="remove"){
                const q = query(collection(db, `playlist-test/${user.uid}/playlist`),where("name", "==", playlistName ));
                let docRef=await getDocs(q)
                let [ref]=docRef.docs.map(d=> d.ref)
                await updateDoc(ref,{
                songs:arrayRemove(song.key)
            })
            }
            else if(action=="add"){
                if(playlistSongId?.[playlistName].length >= 4){
                    alert("Due to API limit, you cant add another songs")
                }else{
                    dispatch(addPlaylistSong({song,playlistName}))
                    const q = query(collection(db, `playlist-test/${user.uid}/playlist`),where("name", "==", playlistName ));
                    let docRef=await getDocs(q)
                    let [ref]=docRef.docs.map(d=> d.ref)
                    await updateDoc(ref,{
                        songs:arrayUnion(song.key)
                    })
                }
                
            }
            
        } catch (e) {
            console.error("Error querying document: ", e);
            return e.response
        }
    }

    useEffect(() => {
        let unsubscribe
        const getData = () =>{
            const q = query(collection(db, `playlist-test/${user.uid}/playlist`),where("name", "==", playlistName ));
            unsubscribe = onSnapshot(q, (querySnapshot) => {
            let arrSong=null;
            querySnapshot.forEach((doc) => {
                arrSong = doc.data().songs;
            });
            dispatch(addPlaylistSongId({playlistName,arrSong}));
            }) 
        }
        if(user !== null) getData();
        if(user == null) navigate("/",{replace:true})
        return () =>{
            unsubscribe?.();
        }
    }, [playlistName])

    useEffect(() => {
        if(playlistData !== null && playlistData !== undefined){
            var [sync] = playlistData?.filter(a => a.name === playlistName);
        }
        const getData= () =>{
            const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
            Promise.all(playlistSongId?.[playlistName].map(async (songId) => {
                console.log("api calls")
                await sleep(1000);
                    trigger(songId).then(res=> {
                        console.log("dispatching in second useeffect")
                        const songData=res.data
                        if(res.data !== undefined) dispatch(setPlaylistData({songData,playlistName}))
                        console.log("dispatch done in second useeffect")
                    }).catch(e=>e.message)
            }))
        }

        // const addSong= ([id],playlistName) =>{
        //     console.log("call add song api")
        //     trigger(id).then(dat=>{
        //         const song= dat.data
        //         dispatch(addPlaylistSong({song,playlistName}))
        //     })
        // }

        if(playlistSongId?.[playlistName] !== null && playlistSongId?.[playlistName] !== undefined && playlistSongId?.[playlistName].length !== 0){
            if(playlistData === null || sync === undefined || sync?.song?.length === 0) getData()
            // if(sync?.song?.length > 0){
            //     const checkExist = playlistSongId?.[playlistName].filter(a=>!sync.song.some(c=> c.key===a))
            //     if(checkExist.length !== 0) addSong(checkExist,playlistName)
            // }
            
        }
        if(sync?.song?.filter(a=> !playlistSongId?.[playlistName]?.includes(a?.key)).length > 0){
            console.log(sync?.song?.filter(a=> !playlistSongId?.[playlistName]?.includes(a?.key)))
            dispatch(removePlaylistSong({playlistName}))
        }

        return ()=>{
        console.log("clean up second use effect")
        }
       
        
}, [JSON.stringify(playlistSongId?.[playlistName]),playlistName])
console.log("component render")
console.log(result,"result from lazy")
    return (
        // <p> {playlistName}</p>
        //     { data && data.map((song,i) => {
        //         return <p key={i}>{song}</p>
        //     })}
        <div className='text-white px-4 md:px-8 overflow-y-hidden overflow-x-hidden'>
            <div className='z-[-1] bg-gradient-to-b from-transparent to-[rgba(0,0,0,.5)] bg-[rgb(89,67,103)] w-full h-[300px] absolute top-0 left-0'></div>
            <div className='z-[-1] bg-gradient-to-b from-[rgba(0,0,0,.6)] to-dark-content bg-[rgb(89,67,103)] w-full h-[300px] absolute top-[300px] left-0'></div>
            <div className='z-30 grid md:grid-cols-[232px,1fr] grid-cols-[1fr] justify-items-center md:justify-items-start 
                            md:gap-x-4 md:gap-y-0 gap-y-2 md:text-left text-center'>
                <div className='md:w-[232px] md:h-[232px] w-[130px] h-[130px]'>
                    <img className='w-full h-full'
                    src="https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/e7/de/de/e7dedeba-77e1-d8eb-26e6-782b38483874/844942085721.jpg/400x400cc.jpg" alt="" />
                </div>
                <div className='flex flex-col justify-end overflow-hidden'>
                    <span className='text-sm font-[500]'>Playlist</span>
                    <p className='md:text-7xl text-3xl truncate md:leading-[6rem] md:mt-[-10px] font-[700] leading-[40px]'>{playlistName}</p>
                    <div className='flex gap-3 md:justify-start justify-around'>
                        <div className='flex items-center gap-1'>
                            <img className='w-6 h-6 rounded-[50%]' src={user?.photoURL} alt="" /> 
                            <p>{user?.displayName.substring(0,user?.displayName.indexOf(' '))}</p>
                        </div>
                        <p className='opacity-60'>{songList?.song?.length} Song</p>
                    </div>
                </div>
            </div>
            <div className='flex gap-6 pt-8'>
                <div className='bg-spotify-green-light h-11 w-11 rounded-[50%] hover:scale-105 duration-75 ease-in'>
                    <button className='w-full h-full flex justify-center items-center '>
                        {isPlaying && currentPlaylist === playlistName ?
                        <PauseIcon onClick={handlePause} className='w-6 h-6 text-black' /> :
                        <PlayIcon onClick={()=>handlePlay(songList?.song[0],songList?.song,0)} className='w-6 h-6 text-black ml-[1px]' /> 
                        }
                    </button>
                </div>
               <button>
                <HeartIcon className='w-8 h-8' />
               </button>
               <button onClick={()=>handleDeletePlaylist(playlistName)}
                       className="group"
                >
                <TrashIcon className='w-6 h-6 text-[#9a2525] group-hover:stroke-2 group-hover:text-[#db3232] ease-out duration-150 group-hover:rotate-12'/>
               </button> 
            </div>
            <div className='grid grid-cols-[8px,1fr,16px] gap-4 px-1 text-gray-400 pt-3 md:pl-4
                            border-solid border-b-[1px] border-[hsla(0,0%,100%,.1)]'>
                <span>#</span>
                <span>Title</span>
            </div>
            <div className='pt-3 pb-16'>
                   {
                     songList && songList?.song?.map((d,i)=>{
                            let c=1;
                            let textActive = isPlaying && activeSong?.key === d?.key ? "truncate text-spotify-green-light"  : "truncate text-white" 
                            return (
                                <button className='relative w-full hover:bg-[hsla(0,0%,100%,.1)] rounded-md group h-14 text-gray-400 md:pl-3' key={i}>
                                    <div className='grid grid-cols-[16px,32px,1fr,16px] items-center gap-x-4'>
                                        {isPlaying && activeSong?.key === d?.key ? 
                                        <img src={PlayGif} className='group-hover:hidden' /> :
                                        <span className='group-hover:hidden'>{i+1}</span>
                                        }
                                        
                                        <div className='hidden group-hover:block h-4 w-4 text-white '>
                                            {isPlaying && activeSong?.key === d?.key ?
                                            <PauseIcon onClick={handlePause} className='w-full h-full' /> :
                                            <PlayIcon onClick={()=>handlePlay(d,songList?.song,i)} className='w-full h-full' /> 
                                            }
                                        </div>
                                        <img className='w-8 h-8' src={d?.images?.coverart} alt="coverart" />
                                        <div className='flex flex-col text-left leading-5 overflow-hidden'>
                                            <span className={textActive}>{d?.title}</span>
                                            <span className='truncate'>{d?.subtitle}</span>
                                        </div>
                                    </div>
                                    <div
                                        onClick={()=>handleAddPlaylistId(d,"remove")}
                                        className='w-6 h-6 hidden group-hover:block absolute right-2 top-[50%] translate-y-[-50%] text-white hover:text-[#f43d3d] ease-in duration-150'>
                                        <MinusCircleIcon className='w-full h-full' />
                                    </div>
                                </button>
                            )
                            
                        })
                   }
                   { result.isFetching && <BeatLoader color="#2bc77c" size={6} margin={2} className="m-auto" />}
            </div>
            {/* <p className='text-2xl font-[700]'>RECOMENDED</p>
            <div className='pt-2'>
                {isFetching && <p>loading related Song ..</p>}
                {error && <p>fetching error ..</p> }
                {data && data.map((song,i)=>{
                    let c=1;
                    return (
                        <button className='relative w-full hover:bg-[hsla(0,0%,100%,.1)] rounded-md group h-14 text-gray-400 md:pl-3' key={i}>
                            <div className='grid grid-cols-[32px,1fr,16px] items-center gap-x-4'>
                                <div className='w-8 h-8 relative'>
                                    <div className='hidden group-hover:block h-5 w-5 text-white absolute inset-0 m-auto'>
                                        <PlayIcon onClick={()=>handlePlay()} className='w-full h-full' />
                                    </div>
                                    <img className='w-full h-full' src={song?.images?.coverart} alt="coverart" />
                                </div>
                                <div className='flex flex-col text-left leading-5'>
                                    <span className='text-white'>{song?.title}</span>
                                    <span className=''>{song?.subtitle}</span>
                                </div>
                            </div>
                            <div
                                onClick={()=>handleAddPlaylistId(song,"add")}
                                className='w-6 h-6 hidden group-hover:block absolute right-2 top-[50%] translate-y-[-50%] text-white hover:text-[#3ab92f] ease-in duration-150'>
                                <PlusCircleIcon className='w-full h-full' />
                            </div>
                        </button>
                    )
                    
                })
            }
            </div> */}
        </div>
    )
}

export default PlaylistDetail
