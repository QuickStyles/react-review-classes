import React from 'react';
import CharacterList from './CharacterList';

function CharacterPage(props) {
  const characters = props.characters;
  const selectCharacter = props.selectCharacter;
  const pickedCharacter = props.pickedCharacter;
  return(
    <div>
      <h1>Charcter Index Page</h1>
      <CharacterList characters={characters} selectCharacter={selectCharacter} pickedCharacter={pickedCharacter}/>
    </div>
  )
}

export default CharacterPage