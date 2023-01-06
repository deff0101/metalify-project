import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { Result } from 'postcss';

export const shazamCoreApi = createApi({
    reducerPath:'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam.p.rapidapi.com',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key',import.meta.env.VITE_SHAZAM_CORE_RAPID_API_KEY);
            
            return headers
        }
    }),
    endpoints:(builder)=>({
        getWorldCharts : builder.query({query:()=>'/charts/track?locale=en-US&listId=genre-global-chart-2'}),
        getLocalCharts : builder.query({query:()=>'/charts/track?locale=en-US&listId=ip-country-chart-ID'}),
        getSong : builder.query({query:(songId)=>`/songs/get-details?key=${songId}&locale=en-US}`}),
        getSongBySearch : builder.query({query:(searchTerm)=>`/search?term=${searchTerm}&locale=en-US`}),
        getRelatedSong : builder.query({query:(randomId)=>`/songs/list-recommendations?key=${randomId}&locale=en-US`}),
        getDataSong:builder.query({
            async queryFn (ids, _queryApi, _extraOptions, fetchWithBQ){
            const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
               const promises = await ids.map(async(id)=>{
                await sleep(1000);
                 return fetchWithBQ(`/tracks/details?track_id=${id}`)
                })
                const data=Promise.all(promises)

                return {data}
            }
        })
    })
})


export const {
    useGetWorldChartsQuery,useGetLocalChartsQuery,useLazyGetSongQuery,useGetRelatedSongQuery,useLazyGetSongBySearchQuery,useGetSongBySearchQuery
} = shazamCoreApi