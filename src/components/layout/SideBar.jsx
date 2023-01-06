import React from 'react'
import {NavLink} from 'react-router-dom'
import {
    HomeIcon,
    RectangleStackIcon,
    MagnifyingGlassIcon,
    HandThumbUpIcon,
    ListBulletIcon,
    RocketLaunchIcon}
from '@heroicons/react/24/outline'
import {
    HomeIcon as HomeIconSolid,}
from '@heroicons/react/24/outline'
import {openLoginModal,openAddPlaylistModal} from '../../features/services/modalSlice'
import { useDispatch,useSelector } from 'react-redux'
import spotifyLogo from '../../assets/spotifyLogo.png'

import Playlist from './Playlist'

function SideBar({user}) {
const styleActive ='flex flex-col md:flex-row items-center md:space-x-2 md:hover:text-white md:text-white text-[#2bc77c] md:p-2 md:bg-sidenav-active rounded-md'
const styleNotActive = 'flex flex-col md:flex-row items-center md:space-x-2 md:hover:text-white md:p-2'
const dispatch=useDispatch();
const {loginModal,playlistModal} = useSelector(state =>state.modal)

const handleAddPlaylist =()=>{
    user == null ? dispatch(openLoginModal()) : dispatch(openAddPlaylistModal())
}
    return (
            <nav className='md:z-0 z-10 fixed w-full bottom-0 h-[50px] bg-spotify-black text-gray-300 md:relative md:flex md:flex-col md:h-screen md:w-[220px]'>
                <div className='px-6 py-4 hidden md:block'>
                    <img src={spotifyLogo} alt="" className='max-w-[130px]'/>
                </div>
                <div className="flex justify-around mt-1 md:p-2 md:flex-col text-xs md:text-base font-[500]">
                    <NavLink  to='/' end
                    className={({isActive}) => isActive ? styleActive : styleNotActive } >
                            <HomeIcon className='h-5 w-5'/>
                            <p className='m-0'>Home</p> 
                    </NavLink>
                    <NavLink to='/search?' 
                    className={({isActive}) => isActive ? styleActive: styleNotActive } >
                            <MagnifyingGlassIcon className='h-5 w-5' />
                            <p>Search</p>
                    </NavLink>
                    {user &&
                        <NavLink to='/library' 
                            className={({isActive}) => isActive ? styleActive: styleNotActive } >
                                <ListBulletIcon className='h-5 w-5' />
                                <p>Library</p>
                        </NavLink>
                    }
                </div>
                <div className="hidden md:block md:p-2 font-[500]">
                    <button className='flex items-center space-x-2 hover:text-white md:p-2' onClick={handleAddPlaylist}>
                        <RectangleStackIcon className='h-5 w-5'/>
                        <p>Create Playlist</p>
                    </button>
                    <button className='flex items-center space-x-2 hover:text-white md:p-2'>
                        <HandThumbUpIcon className='h-5 w-5'/>
                        <p>Liked Songs</p>
                    </button>
                    <NavLink to='/madeforyou' end
                        className={({isActive}) => isActive ? styleActive : styleNotActive } >
                        <RocketLaunchIcon className='h-5 w-5' />
                        <p>Made For You</p>
                    </NavLink>
                </div>
                <hr className='hidden md:border-t-[0.1px] md:border-gray-800'/>
                <Playlist user={user} />
            </nav>
    )
}

export default SideBar
