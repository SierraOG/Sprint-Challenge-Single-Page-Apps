import React from 'react'

import { Card, Icon } from 'semantic-ui-react'

// return (
    //     <div className = "episode-card">
    //       <h2>{episode.name}</h2>
    //       <h3>{episode.episode}</h3>
    //       <h4>{episode.air_date}</h4>
    //       <p>{episode.characters.length} characters</p>
    //     </div>
    
    
    //   )

export default function EpisodeCard ({ episode }) {

  const description = [
    episode.episode,
    ' - ',
    episode.air_date,
  ].join(' ')

  return (
    <Card>
      <Card.Content header={episode.name} />
      <Card.Content description={description} />
      <Card.Content extra>
        <Icon name='user' />
        {episode.characters.length} characters
      </Card.Content>
    </Card>
  )
}
