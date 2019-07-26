import React, {useEffect} from 'react'
import { Card, Image, Dimmer, Loader } from 'semantic-ui-react'


export default function CharacterCard ({  char, isLoading, setIsLoading }) {
  useEffect(()=>{
    setIsLoading(false)
  }, [char])
  
  return (isLoading) ? (
    <Dimmer inverted active>
      <Loader inverted > Loading </Loader>
    </Dimmer>
  )
  : (
    <Card>
    <Image src={char.image} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{char.name}</Card.Header>
      <Card.Meta>
        <span className='date'>{char.species} {char.status}</span>
      </Card.Meta>
      <Card.Description>
        Location: {char.location.name} <br/>
        Origin: {char.origin.name}
      </Card.Description>
    </Card.Content>
    </Card>
    )
}
