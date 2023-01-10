import React from 'react'
import Home from '../Home'
import Search from '../Search'
import Library from '../Library'
import PlaylistDetail from '../PlaylistDetail'
import {ChevronRightIcon,ChevronLeftIcon,PowerIcon} from '@heroicons/react/24/outline'
import {Routes,Route,useNavigate} from 'react-router-dom'

//redux
import { useDispatch,useSelector } from 'react-redux'
import { clearPlaylistData } from '../../features/services/playerSlice'

//google
import { signOut } from 'firebase/auth';
import {auth, googleSignIn} from '../../config/firebaseConfig'
import SongDetail from '../SongDetail'
import MadeForYou from '../MadeForYou'


function Center({user}) {
    const dispatch = useDispatch()
    const navigate=useNavigate()
    const handleSignOut =  () =>{
        signOut(auth).then(()=>{
        dispatch(clearPlaylistData())
        navigate("/",{replace:true})
        }).catch(e => e.message)
        
    }
    return (
        <div className='h-screen w-screen md:w-full relative bg-dark-content overflow-x-scroll md:overflow-x-hidden z-[1]'>
            {/* <div 
                className='h-[332px] absolute left-0 right-0 z-[-1] bg-gradient-to-b from-cyan-600 to-spotify-black'
            >

            </div> */}
            <nav className='sticky inset-x-0 top-0 z-10'>
                <div className='flex justify-between items-center md:px-8 px-3 py-3 md:w-full w-screen'>
                    <div className='flex gap-3'>
                        <button
                            className='h-[30px] w-[30px] rounded-[50%] bg-[rgba(0,0,0,.7)] flex justify-center items-center'
                            onClick={() => navigate(-1)}
                        >
                            <ChevronLeftIcon className='h-[25px] w-[25px] text-white'/>
                        </button>
                        <button
                            className='h-[30px] w-[30px] rounded-[50%] bg-[rgba(0,0,0,.7)] flex justify-center items-center'
                            onClick={() => navigate(1)}
                        >
                            <ChevronRightIcon className='h-[25px] w-[25px] text-white' />
                        </button>
                    </div>
                    {user ?
                        <div className='flex gap-1 bg-[#1b1b1b92] rounded-md px-1 pl-2'>
                            <span className='text-white'>{user?.displayName}</span>
                            <PowerIcon onClick={handleSignOut} className='text-white w-6 h-6 cursor-pointer rounded-md hover:text-[#fb2b2b] ease-in duration-150' />
                        </div>
                        :
                        <div>
                            <button onClick={()=> googleSignIn()} 
                                className=' text-white md:text-base text-sm rounded-[40px] w-20 md:w-24 md:h-10 bg-spotify-green-light py-1 font-bold ease-in duration-100'>Login</button>
                        </div>    
                    }
                </div>
            </nav>
            <div className='pb-[140px] md:pb-[90px] z-[2]'>
            <Routes>
                    <Route path='/' element={<Home />}/>
                    <Route path='/search' element={<Search user={user} />}/>
                    <Route path='/song/:key' element={<SongDetail />}/>
                    <Route path='/library' element={<Library user={user}/>}/>
                    <Route path='/playlist/:playlistName' element={<PlaylistDetail user={user} />}/>
                    <Route path='/madeforyou' element={<MadeForYou />}/>
            </Routes>
            </div>
        </div>
    )
}

export default Center
