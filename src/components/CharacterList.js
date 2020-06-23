import React from 'react';

function CharacterList(props) {
  const characters = props.characters;
  return(
    <div>
      { characters.map(c => {
        return(
          <div key={c.id}>
            <h2>{c.name}</h2>
            <img src='#' width='300px' height='300px'></img>
            <p>{c.description}</p>
          </div>
        )
      })}
    </div>
  )
}

export default CharacterList
