import { useState,useEffect } from 'react'
import MusicPlayer from './components/musicplayer/Index'
import Center from './components/layout/MainContents'
import SideBar from './components/layout/SideBar'
import { useLocation } from 'react-router-dom'
//redux
import { useDispatch,useSelector } from 'react-redux'

// //google
import {auth} from './config/firebaseConfig'
import { onAuthStateChanged } from 'firebase/auth'
import LoginModal from './components/modals/LoginModal'
import AddPlaylistModal from './components/modals/AddPlaylistModal'

function App() {
  // const location=useLocation()
  // const show = location.pathname.includes('/song/')
  const dispatch=useDispatch();
  const {loginModal,playlistModal} = useSelector(state =>state.modal)
  const [user,setUser]=useState(null)

  
  useEffect(()=>{
    const unsubscribe =  onAuthStateChanged(auth,(currentUser)=>{
      if (currentUser) {
        setUser(currentUser)
      }else{
        setUser(null)

      }
    })
  return unsubscribe;
 },[])
 
  return (
    <div className='overflow-hidden'>
    {loginModal && <LoginModal />}
    {playlistModal && <AddPlaylistModal user={user}/>}
      <div className="grid grid-cols-[220px,1fr]">
        <SideBar user={user}/>
        <Center  user={user} />
      </div>
      <div className="z-[20] fixed inset-x-0 bottom-[45px] pb-1 rounded-t-[15px] md:h-[90px] md:bottom-0 md:rounded-none h-auto w-full bg-dark-gray/60 backdrop-saturate-[3] backdrop-blur-[7px]">
        <MusicPlayer />
      </div>
    </div>
  )
}

export default App
