import React from 'react';

function Card(props) {
  const selectCharacter = props.selectCharacter;
  
  function handleClick(e, id) {
    selectCharacter(id);
  }

  const character = props.character
  return(
    <div key={character.id} style={styles.container} onClick={(e) => handleClick(e, character.id)}>
      <h2>{character.name}</h2>
      <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} width='300px' height='300px'></img>
      <p style={styles.text}>{character.description}</p>
    </div>
  )
}

const styles = {
  container: {
    width: '400px',
    height: '540px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: 'solid black 2px',
    marginTop: '5px',
    marginBottom: '5px'
  },
  text: {
    width: '300px'
  }
}

export default Card