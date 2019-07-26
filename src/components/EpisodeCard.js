import React, {useEffect} from 'react'

import { Card, Icon, Dimmer, Loader } from 'semantic-ui-react'

export default function EpisodeCard ({ episode,isLoading, setIsLoading  }) {

    useEffect(()=>{
     setIsLoading(false)
    }, [episode])

  const description = [
    episode.episode,
    ' - ',
    episode.air_date,
  ].join(' ')
  
  return (isLoading) ? (
    <Dimmer inverted active>
      <Loader inverted > Loading </Loader>
    </Dimmer>
  )
  : (
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
