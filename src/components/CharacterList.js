import React from 'react';
import Card from './Card';

function CharacterList(props) {
  const characters = props.characters;
  return(
    <div>
      { characters.map(c => <Card key={c.id} character={c}/>) }
    </div>
  )
}

export default CharacterList
