import React from 'react';
import CharacterList from './CharacterList';

function CharacterPage(props) {
  const characters = props.characters;
  return(
    <div>
      <h1>Charcter Index Page</h1>
      <CharacterList characters={characters}/>
    </div>
  )
}

export default CharacterPage