import React, { useEffect, useState } from 'react';
import axios from 'axios'
import EpisodeCard from './EpisodeCard'

export default function LocationsList() {
  // TODO: Add useState to track data from useEffect
  const [episodeList, setEpisodeList] = useState([])
  const [isLoading, setIsLoading ] = useState(true)
  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get('https://rickandmortyapi.com/api/episode/')
    .then(data => {
      console.log(data.data.results)
      setEpisodeList(data.data.results)
    })
  }, [])

  return <section className='episode-list grid-view'>
     {episodeList.map((episode) => <EpisodeCard episode={episode} isLoading={isLoading} setIsLoading={setIsLoading}/>)}
    </section>

}