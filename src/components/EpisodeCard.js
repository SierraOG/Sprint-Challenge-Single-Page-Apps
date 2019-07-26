import React from 'react'

export default function EpisodeCard ({ episode }) {
  return (
    <div className = "episode-card">
      <h2>{episode.name}</h2>
      <h3>{episode.episode}</h3>
      <h4>{episode.air_date}</h4>
      <p>{episode.characters.length} characters</p>
    </div>
  )
}
