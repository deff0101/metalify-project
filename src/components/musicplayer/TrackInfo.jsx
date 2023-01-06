import {useEffect} from 'react'
import {HeartIcon} from '@heroicons/react/24/outline'
import {useSelector} from 'react-redux'
import { NavLink,useLocation } from 'react-router-dom'

function TrackInfo({activeSong}) {
    const location=useLocation().pathname.includes("/song/");
    return (
        <div className="flex items-center justify-start w-[calc(100vw-60px)] md:w-auto">
            <div className='h-[55px] w-[55px]'>
                <img src={activeSong?.images?.coverart}
                alt="cover art"  />
            </div>
            <div className='pl-4 pr-7 leading-4 md:w-[50%] w-[40%]'>
                <NavLink to={`song/${activeSong?.key}`}>
                <p className="truncate text-white font-[500]">
                    {activeSong?.title ? activeSong?.title : 'No active Song'}
                </p>
                </NavLink>
                <p className="truncate text-white font-[300] text-[16px] opacity-80">
                    <small>{activeSong?.subtitle ? activeSong?.subtitle : 'No active Song'}</small>
                </p>
            </div>
            <div className='ml-auto md:m-0 justify-self-end'>
                <HeartIcon className='h-6 w-5 cursor-pointer text-white'/>
            </div>

        </div>
    )
}

export default TrackInfo
