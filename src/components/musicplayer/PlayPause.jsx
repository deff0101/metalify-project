import React from 'react'
import { PlayIcon,PauseIcon } from '@heroicons/react/24/solid'

function PlayPause({isPlaying,handlePlayPause,max,min,value}) {
    const playerState =`conic-gradient(#1D8954 ${value * (360/max)}deg,#b8b8b8 0deg)`
    return (
        <div 
            className='h-9 w-9 rounded-[50%] md:bg-white flex justify-center items-center hover:scale-105
            before:content-[""] before:absolute before:h-[30px] before:w-[30px] before:bg-white before:rounded-[50%]
            ease-out duration-100
            '
            style={{background:playerState}}
            >
            { isPlaying ? 
                <PauseIcon className='h-6 w-6 z-10' onClick={handlePlayPause} />
                :<PlayIcon className='h-[1.4rem] w-[1.4rem] translate-x-px'  onClick={handlePlayPause}/> 
            }
        </div>
    )
}

export default PlayPause
