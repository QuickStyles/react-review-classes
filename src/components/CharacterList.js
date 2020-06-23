import React from 'react';
import Card from './Card';

function CharacterList(props) {
  const characters = props.characters;
  const selectCharacter = props.selectCharacter;
  const pickedCharacter = props.pickedCharacter;
  return(
    <div style={style.container}>
      { characters.map(c => <Card key={c.id} character={c} selectCharacter={selectCharacter} pickedCharacter={pickedCharacter}/>) }
    </div>
  )
}

const style = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: '20px'
  }
}

export default CharacterList
