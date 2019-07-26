import React from 'react'

export default function CharacterCard ({  char }) {
  return (
    <div className = "char-card">
      <img src = {char.image} alt = {char.name}/>
      <h2>{char.name}</h2>
      <p>{char.species} {char.status}</p>
      <h3>Location: {char.location.name}</h3>
      <h3>Origin: {char.origin.name}</h3>
    </div>
    )
}
