import React, {useState, useEffect, useRef} from 'react'
import SearchForm from './SearchForm';
import CharacterCard from './CharacterCard'
import axios from 'axios'

export default function WelcomePage() {
  const [query, setQuery] = useState('')
  const [person, setPerson] = useState({})
  const [isLoading, setIsLoading ] = useState(true)
  const firstRender = useRef(true)

  const onSearch = (event)=>{
    event.preventDefault()
    console.log(event.target.name.value)
    setQuery(event.target.name.value)
    firstRender.current = false
  }

  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character/?name=${query}`)
    .then(data => {
      setPerson(data.data.results[0])
      console.log(data.data.results[0])
    })
  }, [query])

  return <section className="welcome-page">
    <header>
      <h1>Welcome to the ultimate fan site!</h1>
      <img className="main-img ui centered medium circular image" src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" alt="rick" />
      <h2 className >Search for a character: </h2>
      <SearchForm onSearch = {onSearch} />
      {firstRender.current ? null : <CharacterCard char={person} isLoading={isLoading} setIsLoading={setIsLoading}/>}
    </header>
  </section>

}
