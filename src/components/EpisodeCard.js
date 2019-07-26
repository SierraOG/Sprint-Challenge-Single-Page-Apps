import React from 'react'

import { Card, Icon } from 'semantic-ui-react'

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
