import {createSlice } from '@reduxjs/toolkit';

const initialState ={
    loginModal:false,
    playlistModal:false
}

const modalSlice = createSlice({
    name:'modal',
    initialState,
    reducers:{
        openLoginModal:(state,action)=>{
            state.loginModal=true;
        },
        closeLoginModal:(state,action)=>{
            state.loginModal=false;
        },
        openAddPlaylistModal:(state,action)=>{
            state.playlistModal=true;
        },
        closeAddPlaylistModal:(state,action)=>{
            state.playlistModal=false;
        }
    }
})

export const {openLoginModal,closeLoginModal,openAddPlaylistModal,closeAddPlaylistModal} = modalSlice.actions
export default modalSlice.reducer