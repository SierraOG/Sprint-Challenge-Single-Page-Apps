import React, { useEffect, useState } from 'react';
import axios from 'axios'
import LocationCard from './LocationCard'

export default function LocationsList() {
  // TODO: Add useState to track data from useEffect
  const [locList, setLocList] = useState([])
  const [isLoading, setIsLoading ] = useState(true)
  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get('https://rickandmortyapi.com/api/location/')
    .then(data => {
      console.log(data.data.results)
      setLocList(data.data.results)
    })
  }, [])

  return <section className='location-list grid-view'>
     {locList.map((loc) => <LocationCard loc={loc} isLoading={isLoading} setIsLoading={setIsLoading}/>)}
    </section>

}
