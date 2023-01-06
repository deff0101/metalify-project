import {useState} from 'react'
import {songList} from '.././assets/songdata'
function SongDetail() {
    const image = songList[3]?.images?.coverarthq
    // const image ="https://is5-ssl.mzstatic.com/image/thumb/Music124/v4/8e/35/4b/8e354bb3-3cc6-c54e-9664-e10b5362f05a/artwork.jpg/400x400cc.jpg"
    console.log(songList)
    return (
        <>
            <div 
            style={{backgroundImage: `url(${image})`}}
            className='bg-center bg-cover absolute w-full h-full top-0'>
            {/* <div className='bg-[url("https://is5-ssl.mzstatic.com/image/thumb/Music124/v4/8e/35/4b/8e354bb3-3cc6-c54e-9664-e10b5362f05a/artwork.jpg/400x400cc.jpg")] absolute w-full h-full top-0'> */}

            </div>
        </>
    )
}

export default SongDetail
