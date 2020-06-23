import React from 'react';
import Card from './Card';

function CharacterList(props) {
  const characters = props.characters;
  return(
    <div style={style.container}>
      { characters.map(c => <Card key={c.id} character={c}/>) }
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
