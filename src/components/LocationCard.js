import React from 'react'
import { Card, Icon } from 'semantic-ui-react'

// <div className = "loc-card">
//   <h2>{loc.name}</h2>
//   <h3>{loc.type}</h3>
//   <h4>{loc.dimension}</h4>
//   <p>{loc.residents.length} residents</p>
// </div>

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
