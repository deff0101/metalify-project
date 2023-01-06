import {useState, useEffect} from 'react'
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { db } from '../config/firebaseConfig';
import useGetFirebasePlaylist from '../hooks/useGetFirebasePlaylist';
import { songData } from '../assets/songData2'
import { useNavigate } from 'react-router-dom';
import { openAddPlaylistModal } from '../features/services/modalSlice';
import { useDispatch } from 'react-redux';
import { FolderPlusIcon } from '@heroicons/react/24/solid';


function Library({user}) {
    const navigate=useNavigate()
    const dispatch = useDispatch()
    const playlist = useGetFirebasePlaylist(user.uid)
    const dummy= songData.tracks.hits[0].track.images.coverart


    if(!playlist.length){
        return <FolderPlusIcon onClick={()=> dispatch(openAddPlaylistModal())} className='text-spotify-green hover:text-spotify-green-light w-24 h-24 absolute left-[calc(50%-3rem)] top-[30%] hover:scale-[1.03] ease-in duration-100 cursor-pointer' />
    }
            
    return (
        <div className='relative text-gray-400 px-4 pt-[162px] [&>*]:rounded-md [&>*>img]:rounded-md grid gap-3 
                        md:grid-rows-[1fr] md:pt-0  md:grid-cols-[repeat(auto-fill,minmax(175px,1fr))]
                        grid-cols-[repeat(2,1fr)]
                        '>
            <div className='md:h-auto md:w-auto md:col-span-2 md:relative md:justify-self-auto
                             h-[150px] w-[calc(100%-2rem)] col-span-1 absolute top-0 justify-self-center
                             bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-rose-400 via-fuchsia-500 to-indigo-500
                             flex justify-start items-center px-4 pb-4 md:pt-10 p-8
                            '>
                <div className='w-full h-full flex flex-col justify-between text-white'>
                    <div className='md:text-base text-[0.7rem]'>
                        <p>
                            you need put some data to display here mate
                        </p>
                        <p>
                           YES RIGHT HERE, FCK's SAKE!
                        </p>
                    </div>
                    <div className='flex flex-col leading-6 md:leading-normal'>
                        <span className='md:text-[2.5rem] text-[1.8rem] font-[700]'>Liked Songs</span>
                        <span>146 Liked Song</span>
                    </div>
                </div>                        
            </div>
            {playlist.map((name,i)=>{
                return (
                    <div key={i} className='bg-dark-gray hover:bg-[#2e2e2e] ease-in duration-200 rounded-md group cursor-pointer'
                         onClick={()=>navigate(`/playlist/${name}`)}          
                                    >
                        <div className='p-4 md:pb-8'>
                        <img src={songData.tracks.hits[i].track.images.coverart} alt="" />
                        <div className='text-xs md:text-sm inline-block mt-4'>
                            <p className='text-base text-white font-[700] truncate'>{name}</p>
                            <p className='inline-block'>By {user.displayName.substring(0,user.displayName.indexOf(' '))}</p>
                            <ul className='list-disc inline-block md:ml-6 ml-5'><li><span className='relative left-[-7px]'>4 Songs</span></li></ul>
                        </div>
                        </div>
                    </div>
                )
            })}
            
           

            
        </div>
    )
}

export default Library
