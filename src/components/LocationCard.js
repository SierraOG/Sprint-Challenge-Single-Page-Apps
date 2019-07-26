import React from 'react'

export default function LocationCard ({ loc }) {
  // image={image}
  return (
    <div className = "loc-card">
      <h2>{loc.name}</h2>
      <h3>{loc.type}</h3>
      <h4>{loc.dimension}</h4>
      <p>{loc.residents.length} residents</p>
    </div>
  )
}
