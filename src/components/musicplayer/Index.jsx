import { useState,useEffect,useRef } from 'react'
import TrackController from './TrackController'
import TrackInfo from './TrackInfo'
import VolumeBar from './VolumeBar'
import { useSelector,useDispatch } from 'react-redux'
import { playPause, nextSong,prevSong } from '../../features/services/playerSlice'
import Player from './Player'
import { current } from '@reduxjs/toolkit'

function MusicPlayer() {
    const {activeSong,isPlaying,songQueue,currentIndex} = useSelector((state)=>state.player);
    // state
    const [appTime,setAppTime]=useState(0)
    const [duration,setDuration]=useState(0)
    const [seekTime,setSeekTime]=useState(0)
    const [volume,setVolume]=useState(0.2)
    const [repeat,setRepeat]=useState(false)
    const [shuffle,setShuffle]=useState(false)

    const dispatch = useDispatch()
    const prevVolume=useRef(null)
    //useEffect hooks
    useEffect(()=>{
        if(volume != 0)
        prevVolume.current=volume
    },[volume])
    //func
    
    const handlePlayPause=()=>{
        isPlaying ? dispatch(playPause(false)) : dispatch(playPause(true)) 
    }

    const handleNextQueue = ()=>{
        if(!shuffle){
            dispatch(nextSong((currentIndex + 1) % songQueue.length))
        }else {
            dispatch(nextSong(Math.floor(Math.random() * songQueue.length)));
        }
    }
    const handlePrevSong = ()=>{
        if(currentIndex==0){
            dispatch(prevSong(songQueue.length - 1))
        }
        else if(shuffle){
            dispatch(nextSong(Math.floor(Math.random() * songQueue.length)));
        }else{
            dispatch(prevSong(currentIndex - 1))
        }
    }

    const handleToggleMute = ()=>{
        volume > 0 ?
        setVolume(val => val=0)
        :
        setVolume(val => val=prevVolume.current)
    }

    return (
        <div className="md:mx-auto my-2 mx-2 gap-y-1 grid items-center justify-between grid-cols-[1fr,1fr] md:grid-cols-[30%,40%,30%] md:py-4 md:px-4">
            <TrackInfo
                activeSong={activeSong}
            />
            <TrackController
                isPlaying={isPlaying}
                handlePlayPause={handlePlayPause}
                value={appTime}
                min="0"
                max={duration}
                onInput={e=> setSeekTime(e.target.value)}
                shuffle={shuffle}
                setShuffle={setShuffle}
                repeat={repeat}
                setRepeat={setRepeat}
                handleNextQueue={handleNextQueue}
                handlePrevSong={handlePrevSong}
            />
            <Player
                activeSong={activeSong}
                isPlaying={isPlaying}
                onTimeUpdate={e=> setAppTime(e.target.currentTime)}
                onLoadedData={e => setDuration(e.target.duration)}
                seekTime={seekTime}
                volume={volume}
                repeat={repeat}
                onEnded={handleNextQueue}
            />
            <VolumeBar
                value={volume}
                onInput={e => setVolume(e.target.value)}
                max="1"
                min="0"
                handleToggleMute={handleToggleMute}
                prevValue={prevVolume.current}
            />
        </div>
    )
}

export default MusicPlayer
