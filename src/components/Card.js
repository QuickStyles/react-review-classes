import React from 'react';

function Card(props) {
  const character = props.character
  return(
    <div key={character.id} style={styles.container}>
      <h2>{character.name}</h2>
      <img src='#' width='300px' height='300px'></img>
      <p style={styles.text}>{character.description}</p>
    </div>
  )
}

const styles = {
  container: {
    width: '400px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  text: {
    width: '300px'
  }
}

export default Card