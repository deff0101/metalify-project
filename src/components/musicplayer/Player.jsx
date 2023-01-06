import { current } from '@reduxjs/toolkit'
import React from 'react'
import { useRef,useEffect } from 'react'


function Player({activeSong,isPlaying,onTimeUpdate,onLoadedData,seekTime,volume,repeat,onEnded}) {
    const ref=useRef(null)
    if(ref.current) isPlaying ? ref.current.play() : ref.current.pause()
   
    useEffect(() => {
        isPlaying ? ref.current.play() : ref.current.pause()
    }, [isPlaying,activeSong])

    useEffect(() => {
        ref.current.currentTime = seekTime
    }, [seekTime])

    useEffect(() => {
        ref.current.volume = volume
    }, [volume])

        

    return (
        <audio 
            src={activeSong?.hub?.actions[1].uri}
            ref={ref}
            onTimeUpdate={onTimeUpdate}
            onLoadedData={onLoadedData}
            loop={repeat}
            onEnded={onEnded}
        />
    )
}

export default Player
