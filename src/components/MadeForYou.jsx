import { HeartIcon, MinusCircleIcon } from '@heroicons/react/24/outline'
import { PauseIcon, PlayIcon } from '@heroicons/react/24/solid'
import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { songData } from '../assets/songData2'
import { playPause, setActiveSong } from '../features/services/playerSlice'
import PlayGif from '../../src/assets/music.gif'


function MadeForYou() {
    const listSong = songData.tracks.hits
    const {playlistSongId,playlistData,activeSong,isPlaying,songQueue} = useSelector(state =>state.player)
    const dispatch = useDispatch()
    const handlePlay = (song,data,i) =>{
        dispatch(playPause(true));
        dispatch(setActiveSong({song,data,i}))
    }
    const handlePause = () => {
        dispatch(playPause(false));
      };
    console.log(listSong)
    return (
        <div className='text-white px-4 md:px-8 overflow-y-hidden overflow-x-hidden'>
            <div className='z-[-1] bg-gradient-to-b from-transparent to-[rgba(0,0,0,.5)] bg-[rgb(89,67,103)] w-full h-[300px] absolute top-0 left-0'>
                <img src={listSong[0].track.images.background} className="z-[-1] w-full h-full object-cover blur-[1.5px] opacity-25" />
            </div>
            <div className='z-[-1] bg-gradient-to-b from-[rgba(0,0,0,.6)] to-dark-content bg-[rgb(89,67,103)] w-full h-[300px] absolute top-[300px] left-0'></div>
            <div className='z-30 grid md:grid-cols-[232px,1fr] grid-cols-[1fr] justify-items-center md:justify-items-start 
                            md:gap-x-4 md:gap-y-0 gap-y-2 md:text-left text-center'>
                <div className='md:w-[232px] md:h-[232px] drop-shadow-2xl '>
                    <img className='w-full h-full rounded-md'
                    src={listSong[0].track.images.coverart} alt="" />
                </div>
                <div className='flex flex-col justify-end overflow-hidden'>
                    <span className='text-sm font-[500]'>#Indonesian Charts</span>
                    <p className='md:text-7xl text-3xl truncate md:leading-[6rem] md:mt-[-10px] font-[700] leading-[40px]'>Made For You</p>
                    <div className='flex gap-3 md:justify-start justify-around'>
                    </div>
                </div>
            </div>
            <div className='flex gap-6 pt-8'>
                <div className='bg-spotify-green-light h-11 w-11 rounded-[50%] hover:scale-105 duration-75 ease-in'>
                    <button className='w-full h-full flex justify-center items-center '>
                    {isPlaying && songQueue.some(song => song?.track?.key === activeSong?.key)?
                        <PauseIcon onClick={handlePause} className='w-6 h-6 text-black' /> :
                        <PlayIcon onClick={()=>handlePlay(listSong?.[0].track,listSong,0)} className='w-6 h-6 text-black ml-[1px]' /> 
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
            <div className='pt-3 pb-16'>
                   {
                     listSong && listSong?.map((d,i)=>{
                            let c=1;
                            let textActive = isPlaying && activeSong?.key === d?.track?.key ? "truncate text-spotify-green-light"  : "truncate text-white" 
                            return (
                                <button className='relative w-full hover:bg-[hsla(0,0%,100%,.1)] rounded-md group h-14 text-gray-400 md:pl-3' key={i}>
                                    <div className='grid grid-cols-[16px,32px,1fr,16px] items-center gap-x-4'>
                                        {isPlaying && activeSong?.key === d?.track?.key ? 
                                        <img src={PlayGif} className='group-hover:hidden' /> :
                                        <span className='group-hover:hidden'>{i+1}</span>
                                        }
                                        
                                        <div className='hidden group-hover:block h-4 w-4 text-white '>
                                            {isPlaying && activeSong?.key === d?.track?.key ?
                                            <PauseIcon onClick={handlePause} className='w-full h-full' /> :
                                            <PlayIcon onClick={()=> handlePlay(d?.track,listSong,i)} className='w-full h-full' /> 
                                            }
                                        </div>
                                        <img className='w-8 h-8' src={d?.track?.images?.coverart} alt="coverart" />
                                        <div className='flex flex-col text-left leading-5 overflow-hidden'>
                                            <span className={textActive}>{d?.track?.title}</span>
                                            <span className='truncate'>{d?.track.subtitle}</span>
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
            </div>
        </div>
    )
}

export default MadeForYou
