import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { playPause, setActiveSong } from '../features/services/playerSlice';
import { useGetWorldChartsQuery,useGetLocalChartsQuery } from '../features/services/shazamCore';
import SongCard from './SongCard'

function Home() {
    const {recentPlay,isPlaying,activeSong,songQueue} = useSelector(state => state.player);
    const {data:worldChart,isFetching:worldChartIsFetching,error:worldChartError} =useGetWorldChartsQuery()
    const {data:localChart,isFetching:localChartIsFetching,error:localChartError} =useGetLocalChartsQuery()
    const worldChartData = worldChart?.tracks;
    const localChartData = localChart?.tracks?.filter(song=> song?.hub?.actions);
    const dispatch = useDispatch()
    const handlePlay = (song,data,i) =>{
        if(data){
            console.log(data)
            console.log("first if")
            dispatch(playPause(true));
            dispatch(setActiveSong({song,data,i}))
        }else{
            console.log("second if")

            dispatch(playPause(true));
            dispatch(setActiveSong({song}))
        }
    }
    const handlePause = () => {
        dispatch(playPause(false));
      };
      console.log(localChartData?.filter(song=> song?.hub?.actions))
    return (
        <div className='text-gray-300'>
            <div>
                {recentPlay.length !== 0 &&
                    <section className='mx-2 md:mx-5'>
                        <div>
                            <h1 className='font-[700] ml-4 text-white text-[2rem] tracking-tight'>Recently Played</h1>
                        </div>
                        <div className={`overflow-x-scroll md:overflow-hidden overflow-y-hidden
                                        grid grid-rows-[1fr] auto-rows-[0] grid-cols-[repeat(4,180px)]
                                        md:grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-3 md:gap-5 pb-3`}>
                        {recentPlay.map((song,i) => {
                            return (
                                <SongCard song={song} key={i} isPlaying={isPlaying} activeSong={activeSong} handlePause={handlePause} handlePlay={handlePlay}/>
                                );
                            })}
                        </div>
                    </section>
                }
                { worldChart && 
                    <section className='mx-2 md:mx-5'>
                        <div>
                            <h1 className='font-[700] ml-4 text-white text-[2rem] tracking-tight'>World Wide Charts</h1>
                        </div>
                        <div className='pb-3 overflow-x-scroll grid md:overflow-hidden overflow-y-hidden grid-rows-[1fr] auto-rows-[0] grid-cols-[repeat(5,180px)] md:grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-3 md:gap-5'>
                        {worldChartData?.slice(0,5).map((song,i) => {
                            return (
                                <SongCard song={song} key={i} isPlaying={isPlaying} activeSong={activeSong} handlePause={handlePause} handlePlay={handlePlay}/>
                                );
                            })}
                        </div>
                    </section>
                }
                {localChart &&
                    <section className='mx-2 md:mx-5'>
                        <div>
                            <h1 className='font-[700] ml-4 text-white text-[2rem] tracking-tight'>Popular in your Country</h1>
                        </div>
                        <div className="pb-3 overflow-x-scroll grid md:overflow-hidden overflow-y-hidden grid-rows-[1fr] auto-rows-[0] grid-cols-[repeat(4,180px)] md:grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-x-3 md:gap-5">
                        {localChartData?.slice(0,5).map((song,i) => {
                            return (
                                <SongCard i={i} song={song} data={localChartData} key={i} isPlaying={isPlaying} activeSong={activeSong} handlePause={handlePause} handlePlay={handlePlay}/>
                                );
                            })}
                        </div>
                    </section>
                }
            </div>
        </div>
    )
}

export default Home
