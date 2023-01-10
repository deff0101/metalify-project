import React,{ useState,useEffect } from 'react'
import {MagnifyingGlassIcon} from '@heroicons/react/24/outline'
import { useDispatch,useSelector } from 'react-redux'
import SongCard from "./SongCard"
import SongGroup from './SongGroup'
import { useGetRelatedSongQuery,useGetSongBySearchQuery } from '../features/services/shazamCore'
import { skipToken } from '@reduxjs/toolkit/dist/query'
import { songData } from '../assets/songData2'
import { PlayIcon,PauseIcon,EllipsisVerticalIcon } from '@heroicons/react/24/solid'
import { setActiveSong,playPause } from '../features/services/playerSlice'
import { ScaleLoader } from 'react-spinners'


function Search({user}) {
    const dispatch=useDispatch();
    const [searchValue,setSearchValue]=useState('')
    const [searchTerm,setSearchTerm]=useState('')
    const {data:searchData,isFetching, error,isSuccess,isLoading} = useGetSongBySearchQuery( searchTerm.length !== 0 ? searchTerm : skipToken)
    const {isPlaying,activeSong} = useSelector(state => state.player)
    // const [trigger,result] = useLazyGetSongBySearchQuery()
    const handleChange= (e) =>{
        setSearchValue(e.target.value)
    }
    const handlePlay = (song) =>{
        dispatch(playPause(true));
        dispatch(setActiveSong({song}))
    }
    const handlePause = () => {
        dispatch(playPause(false));
      };
    // const data=songData?.tracks?.hits
    const data = searchData?.tracks?.hits;
    useEffect(() => {
        let timer = setTimeout( async ()=>{
            if(searchValue.length >= 2 && searchValue.length < 30 && searchValue.length !== 0){
                setSearchTerm(searchValue)
                console.log("fetching")
            }
        },800)
        return () => {
            console.log("cleanup")
            clearTimeout(timer)
        }
    }, [searchValue])
    console.log(!searchTerm ? true:false)
    return (
        <div className='px-2'>
            <div className='relative max-w-[368px]'>
                <MagnifyingGlassIcon className='w-6 h-6 absolute m-auto inset-y-0 left-2'/>
                <input className='w-full h-[35px] px-[48px] rounded-[20px]' onChange={handleChange} type="text" value={searchValue} placeholder="Search Song / Artist"/>
            </div>
            {isFetching &&
                <div className='absolute top-0 h-[calc(100vh-90px)] w-full flex items-center justify-center'>
                    <ScaleLoader color="#2bc77c" height={15} width={2} margin={1}/>
                </div>
            }
            {error && <p className='text-red-400'>sorry failed to search song</p>}
            {!isFetching && isSuccess && !data  && <p className='text-red-400'>No Song available</p>}
            {(!isFetching && data) &&
            <div className='grid md:grid-cols-[0.6fr,1fr] gap-x-3 text-white mt-5 md:mt-16'>
                <div className='grid'>
                    <div className='font-[700] ml-4 text-white text-[2rem] tracking-tight truncate'><p>Top Result</p></div>
                    <div className='group relative h-full w-full flex flex-col bg-dark-gray md:hover:bg-[#2e2e2e] ease-in duration-200 rounded-md p-4 cursor-pointer'>
                    <div className={`w-11 h-11 bg-spotify-green-light text-black absolute right-4 mb-3 bottom-0 hover:scale-105 flex justify-center items-center rounded-full
                                    ease-in duration-150 hover:duration-75
                                    group-hover:opacity-100 ${isPlaying && activeSong?.key === data[0].track?.key ? `md:opacity-100 md:mb-4` :`md:opacity-0 md:group-hover:mb-4`}`}>
                            {
                            isPlaying && activeSong?.key === data[0].track?.key
                            //  isPlaying && activeSong?.key === data[0].track?.key
                             ?
                            <PauseIcon onClick={handlePause} className='h-6 w-6' /> :
                            <PlayIcon onClick={()=>handlePlay(data[0]?.track)}
                            className='ml-[1.3px] h-6 w-6' /> 
                            }
                    </div>
                    <div className='h-[120px] w-[120px]'>
                        <img src={data[0]?.track?.images?.coverart} alt={data[0]?.track?.title} className="rounded-md" />
                        {/* <img src={data[0]?.track?.images?.coverart} alt={data?.track?.title} className="rounded-md" /> */}
                    </div>
                    <div>
                        <p className=' font-[700] truncate'>{data[0]?.track?.title}</p>
                        <p>{data[0]?.track?.subtitle}</p>         
                    </div>
                </div>
                </div>
                <div className='grid'>
                    <div className='font-[700] ml-4 text-white text-[2rem] tracking-tight mt-2 md:mt-0'>Songs</div>
                    <div className='mt-2 flex flex-col gap-2 md:block'>
                        {data?.slice(1,5).map((data,i)=>{
                            return <SongGroup song={data.track} key={i} i={i} user={user} />
                        })}
                    </div>
                </div>
            </div>
            }
            {(!isFetching && data ) &&
                <section className='mt-5'>
                        <div className='overflow-hidden'>
                            <h1 className='font-[700] ml-4 text-white text-[2rem] truncate tracking-tight'>Related to "{isLoading  ? "" : searchTerm}"</h1>
                            {/* <h1 className='font-[700] ml-4 text-white text-[2rem] tracking-tight'>Songs Related to "{searchTerm}"</h1> */}
                        </div>
                    <div className="overflow-x-scroll md:overflow-hidden overflow-y-hidden
                                    grid grid-rows-[1fr] auto-rows-[0] grid-cols-[repeat(4,180px)]
                                    md:grid-cols-[repeat(auto-fill,minmax(200px,1fr))]
                                    gap-3 md:gap-5 pb-3 text-gray-300">
                        {data?.slice(0,5).map((data,i)=>{
                            return <SongCard song={data.track} key={i} isPlaying={isPlaying} activeSong={activeSong} handlePause={handlePause} handlePlay={handlePlay}/>
                        })}
                    </div>
                </section>
            }
           
        </div>
        
    )
}
export default Search
