import React from 'react'
import Controller from './Controller'
import PlayPause from './PlayPause'
import ProgressBar from './ProgressBar'

function TrackController({
    isPlaying,
    min,max,value,onInput,setRepeat,repeat,shuffle,setShuffle,
    handlePlayPause,
    handleNextQueue,
    handlePrevSong}) {
    return (
        <div className='md:flex md:gap-y-1 md:flex-col md:items-center md:justify-between md:justify-self-auto justify-self-end'>
            <Controller
                isPlaying={isPlaying}
                handlePlayPause={handlePlayPause}
                shuffle={shuffle}
                setShuffle={setShuffle}
                repeat={repeat}
                setRepeat={setRepeat}
                handleNextQueue={handleNextQueue}
                handlePrevSong={handlePrevSong}
            />
            <ProgressBar
               value={value}
               min={min}
               max={max}
               onInput={onInput}
               />
            <div className='md:hidden'>
                <PlayPause
                    isPlaying={isPlaying}
                    handlePlayPause={handlePlayPause}
                    min={min}
                    value={value}
                    max={max}
                />
            </div>
        </div>
    )
}

export default TrackController
