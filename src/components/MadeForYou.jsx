import { HeartIcon, MinusCircleIcon } from '@heroicons/react/24/outline'
import { PauseIcon, PlayIcon,MusicalNoteIcon } from '@heroicons/react/24/solid'
import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { songData } from '../assets/songData2'
import { playPause, setActiveSong } from '../features/services/playerSlice'
import PlayGif from '../../src/assets/music.gif'
import { useGetLocalChartsQuery } from '../features/services/shazamCore'


function MadeForYou() {
    
    const {playlistSongId,playlistData,activeSong,isPlaying,songQueue} = useSelector(state =>state.player);
    const {data,isFetching} = useGetLocalChartsQuery();
    const listSong = data?.tracks?.filter(song=> song?.hub?.actions)
    const dispatch = useDispatch()
    const handlePlay = (song,data,i) =>{
        dispatch(playPause(true));
        dispatch(setActiveSong({song,data,i}))
    }
    const handlePause = () => {
        dispatch(playPause(false));
      };
    console.log(listSong,"list song")
    console.log(data?.tracks,"data")
    if(isFetching) return <p>Loading ..</p>
    return (
        <div className='text-white px-4 md:px-8 overflow-y-hidden overflow-x-hidden'>
            <div className='z-[-1] bg-gradient-to-b from-transparent to-[rgba(0,0,0,.5)] bg-[rgb(89,67,103)] w-full md:h-[300px] h-[270px] absolute top-0 left-0'>
                <img src={listSong[0].images.background} className="z-[-1] w-full h-full object-cover blur-[1.5px] opacity-25" />
            </div>
            <div className='z-[-1] bg-gradient-to-b from-[rgba(0,0,0,.6)] to-dark-content bg-[rgb(89,67,103)] w-full h-[300px] absolute md:top-[300px] top-[270px] left-0'></div>
            <div className='z-30 grid md:grid-cols-[232px,1fr] grid-cols-[1fr] justify-items-center md:justify-items-start 
                            md:gap-x-4 md:gap-y-0 gap-y-2 md:text-left text-center'>
                <div className='md:w-[232px] md:h-[232px] w-[100px] h-[100px] drop-shadow-2xl '>
                    <img className='rounded-md'
                    src={listSong[0].images.coverart} alt="" />
                </div>
                <div className='flex flex-col justify-end truncate'>
                    <span className='text-sm font-[500]'>Top Songs - Indoneisa</span>
                    <p className='md:text-7xl text-3xl truncate md:leading-[6rem] md:mt-[-10px] font-[700] leading-[40px]'>Made For You</p>
                    <div className='flex md:justify-start justify-around '>
                        <span className='text-gray-400 md:text-base text-xs'>Most played tracks right now - Indonesia</span>
                    </div>
                    <div className='flex items-center pt-2 md:justify-start justify-center'>
                        <MusicalNoteIcon className='md:h-4 md:w-4 w-[10px] h-[10px]'/><span className='md:text-sm text-[10px]'>{listSong?.length} Songs</span>
                    </div>
                </div>
            </div>
            <div className='flex gap-6 md:pt-8 pt-6'>
                <div className='bg-spotify-green-light h-11 w-11 rounded-[50%] hover:scale-105 duration-75 ease-in'>
                    <button className='w-full h-full flex justify-center items-center '>
                    {isPlaying && songQueue.some(song => song?.key === activeSong?.key)?
                        <PauseIcon onClick={handlePause} className='w-6 h-6 text-black' /> :
                        <PlayIcon onClick={()=>handlePlay(listSong?.[0],listSong,0)} className='w-6 h-6 text-black ml-[1px]' /> 
                        }
                    </button>
                </div>
               <button>
                <HeartIcon className='w-8 h-8' />
               </button>
            </div>
            <div className='grid grid-cols-[8px,1fr,16px] gap-4 px-1 text-gray-400 pt-3 md:pl-4
                            border-solid border-b-[1px] border-[hsla(0,0%,100%,.1)]'>
                <span>#</span>
                <span>Title</span>
            </div>
            <div className='pt-3'>
                   {
                     listSong && listSong?.map((d,i)=>{
                            let c=1;
                            let textActive = isPlaying && activeSong?.key === d?.key ? "truncate text-spotify-green-light"  : "truncate text-white" 
                            return (
                                <button className='relative w-full hover:bg-[hsla(0,0%,100%,.1)] rounded-md group h-14 text-gray-400 md:pl-3' key={i}>
                                    <div className='grid grid-cols-[16px,32px,1fr] items-center gap-x-4'>
                                        {isPlaying && activeSong?.key === d?.key ? 
                                        <img src={PlayGif} className='group-hover:hidden' /> :
                                        <span className='group-hover:hidden'>{i+1}</span>
                                        }
                                        
                                        <div className='hidden group-hover:block h-4 w-4 text-white '>
                                            {isPlaying && activeSong?.key === d?.key ?
                                            <PauseIcon onClick={handlePause} className='w-full h-full' /> :
                                            <PlayIcon onClick={()=> handlePlay(d,listSong,i)} className='w-full h-full' /> 
                                            }
                                        </div>
                                        <img className='w-8 h-8' src={d?.images?.coverart} alt="coverart" />
                                        <div className='flex flex-col text-left leading-5 overflow-hidden'>
                                            <span className={textActive}>{d?.title}</span>
                                            <span className='truncate'>{d?.subtitle}</span>
                                        </div>
                                    </div>
                                </button>
                            )
                            
                        })
                   }
            </div>
        </div>
    )
}

export default MadeForYou
