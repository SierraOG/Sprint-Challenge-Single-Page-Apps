import React, { useEffect } from 'react'
import { Card, Icon, Dimmer, Loader } from 'semantic-ui-react'

export default function LocationCard ({ loc,isLoading, setIsLoading }) {
  useEffect(()=>{
    setIsLoading(false)
  }, [loc])

  const description = [
    loc.type,
    ' - ',
    loc.dimension,
  ].join(' ')
  
  return (isLoading) ? (
    <Dimmer inverted active>
      <Loader inverted > Loading </Loader>
    </Dimmer>
  )
  : (
    <Card>
      <Card.Content header={loc.name} />
      <Card.Content description={description} />
      <Card.Content extra>
        <Icon name='user' />
        {loc.residents.length} residents
      </Card.Content>
    </Card>
  )
}
