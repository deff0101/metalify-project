import React from 'react'
import {closeLoginModal} from '../../features/services/modalSlice'
import { useDispatch } from 'react-redux';
import {googleSignIn} from '../../config/firebaseConfig'

function LoginModal() {
    const dispatch = useDispatch()
    const buttonStyle='outline outline-spotify-green-light outline-1 rounded-md px-4 py-2 hover:bg-white hover:outline-none hover:text-black'
    return (
        <div onClick={()=>dispatch(closeLoginModal()) } className='fixed w-screen h-screen z-30 bg-[#00000090] text-white flex justify-center items-center'>
            <div onClick={e=> e.stopPropagation()} className='relative bg-dark-content rounded-lg w-[250px] h-[100px] md:h-[120px] p-4'>
                <div className='flex flex-col w-full h-full '>
                <h2 className='mb-1'>Login With Google</h2>
                <div class="decoration-none w-full border-b border-text-gray "></div>
                    <div className='mt-5 flex justify-end gap-x-1'>
                        <button onClick={()=>dispatch(closeLoginModal())} className='outline outline-white outline-1 rounded-[40px] w-20 h-7 md:w-24 md:h-10 hover:bg-[#ee3e35] hover:outline-none '> Cancel </button>
                        <button onClick={()=> {
                                            googleSignIn();
                                            dispatch(closeLoginModal())}}
                                className=' bg-spotify-green-light rounded-[40px] w-20 md:w-24 md:h-10 hover:bg-spotify-green-light hover:scale-[1.04] ' > Login </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginModal
