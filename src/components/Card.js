import React from 'react';

function Card(props) {
  const character = props.character
  return(
    <div key={character.id}>
      <h2>{character.name}</h2>
      <img src='#' width='300px' height='300px'></img>
      <p>{character.description}</p>
    </div>
  )
}

export default Card