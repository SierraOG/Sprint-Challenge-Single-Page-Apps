import React, { useEffect, useState, useRef } from 'react';

import axios from 'axios'
import CharacterCard from './CharacterCard';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [charList, setCharList] = useState([])
  const [isLoading, setIsLoading ] = useState(true)
  
  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get('https://rickandmortyapi.com/api/character/')
    .then(data => {
      console.log(data.data.results)
      setCharList(data.data.results)
    })
  }, [])

  return <section className='character-list grid-view'>
      {charList.map((char) => <CharacterCard char={char} isLoading={isLoading} setIsLoading={setIsLoading}/>)}
    </section>

}
