import React from 'react'
import {TbArrowsShuffle} from 'react-icons/tb'
import {IoIosSkipBackward,IoIosSkipForward} from 'react-icons/io'
import {BiRepeat} from 'react-icons/BI'
import { IconContext } from "react-icons";
import { PlayIcon,PauseIcon} from '@heroicons/react/24/solid'
import PlayPause from './PlayPause'


function Controller({isPlaying,handlePlayPause,setRepeat,repeat,shuffle,setShuffle,handleNextQueue,handlePrevSong}) {
    return (
        <>
            <div className="hidden md:flex items-center justify-between w-[224px]">
                <IconContext.Provider value={{className:"h-5 w-5 text-white opacity-80 hover:opacity-100" }}>
                    <TbArrowsShuffle color={shuffle ?'#1DB954':'white'} onClick={() => setShuffle((prev) => !prev)}/>
                    <IoIosSkipBackward onClick={handlePrevSong}/>
                    <PlayPause isPlaying={isPlaying} handlePlayPause={handlePlayPause} />
                    <IoIosSkipForward onClick={handleNextQueue}/>
                    <BiRepeat color={repeat ?'#1DB954':'white'} onClick={() => setRepeat((prev) => !prev)}/>
                </IconContext.Provider>
            </div>
        </>
    )
}

export default Controller
