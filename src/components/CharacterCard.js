import React from 'react'
import { Card, Image } from 'semantic-ui-react'

{/* <div className = "char-card">
<img src = {char.image} alt = {char.name}/>
<h2>{char.name}</h2>
<p>{char.species} {char.status}</p>
<h3>Location: {char.location.name}</h3>
<h3>Origin: {char.origin.name}</h3>
</div> */}


export default function CharacterCard ({  char }) {
  return (
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
