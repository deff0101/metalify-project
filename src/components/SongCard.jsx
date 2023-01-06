import React from 'react'
import { PlayIcon,PauseIcon,EllipsisVerticalIcon } from '@heroicons/react/24/solid'

function SongCard({song,activeSong,isPlaying,handlePause,handlePlay,data,i}) {
    let customClass;
    if(isPlaying && activeSong?.key === song.key){
        customClass="w-11 h-11 bg-spotify-green-light text-black absolute right-4 mb-3 bottom-0 hover:scale-105 flex justify-center items-center rounded-full ease-in duration-150 hover:duration-75 opacity-100 mb-4"
    }else{
        customClass="w-11 h-11 bg-spotify-green-light text-black absolute right-4 mb-3 bottom-0 hover:scale-105 flex justify-center items-center rounded-full ease-in duration-150 hover:duration-75 group-hover:opacity-100 opacity-0 group-hover:mb-4"
    }
    return (
            <div className="bg-dark-gray hover:bg-[#2e2e2e] ease-in duration-200 rounded-md group cursor-pointer">
                <div className='p-4 relative'>
                    <div className='md:shadow-[6px_9px_15px_-2px_rgba(0,0,0,50%)]
                                    shadow-[3px_4px_7px_-2px_rgba(0,0,0,50%)]
                                    '>
                        <img src={song?.images?.coverart} alt={song?.title} className="rounded-md" />
                    </div>
                    <div className={customClass}>
                            {
                            // isPlaying && activeSong?.key === data[0].track?.key
                             isPlaying && activeSong?.key === song.key
                             ?
                             <PauseIcon onClick={handlePause} className='h-6 w-6' />
                             :
                             // <PlayIcon onClick={()=>handlePlay(data[0].track)}
                             <PlayIcon onClick={()=> data? handlePlay(song,data,i):handlePlay(song)}
                             className='translate-x-[1.2px] h-6 w-6' /> 
                            }
                    </div>
                    <div className='mt-4 '>
                        <p className={`${isPlaying && activeSong?.key === song?.key ? `text-spotify-green-light font-[700] truncate` : `text-white font-[700] truncate`}`}>{song?.title}</p>
                        <p className='truncate'>{song?.subtitle}</p>
                    </div>
                </div>
            </div>
    )
}

export default SongCard
