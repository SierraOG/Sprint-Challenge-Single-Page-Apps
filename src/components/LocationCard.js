import React from 'react'
import { Card, Icon } from 'semantic-ui-react'


export default function LocationCard ({ loc }) {

  const description = [
    loc.type,
    ' - ',
    loc.dimension,
  ].join(' ')

  return (
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
