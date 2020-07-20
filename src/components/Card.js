import React from 'react';
import CharacterStatsList from './CharacterStatsList';
import { render } from '@testing-library/react';

function Card(props) {
  const character = props.character
  const selectCharacter = props.selectCharacter;
  const pickedCharacter = props.pickedCharacter || {};

  function handleClick(e, id) {
    selectCharacter(id);
  }

  let containerStyles;

  if (!character) {
    containerStyles = character.id === pickedCharacter.id ? {...styles.container, border: 'solid red 2px'} : {...styles.container}
  }
  const stats = {
    durability: character.durability,
    energy: character.energy,
    fighting: character.fighting_skills,
    intelligence: character.intelligence,
    speed: character.speed,
    strength: character.strength
  }


  // render div with onClick listener using ternary statement

  // let card = selectCharacter ? (
  //   <div key={character.id} style={containerStyles} onClick={(e) => handleClick(e, character.id)}>
  //     <h2>{character.name}</h2>
  //     <img src={`${character.thumbnail_url}`} width='300px' height='300px'></img>
  //     <CharacterStatsList stats={stats}/>
  //     <p style={styles.text}>{character.description}</p>
  //   </div>
  // )
  // : (
  //   <div key={character.id} style={containerStyles}>
  //     <h2>{character.name}</h2>
  //     <img src={`${character.thumbnail_url}`} width='300px' height='300px'></img>
  //     <CharacterStatsList stats={stats}/>
  //     <p style={styles.text}>{character.description}</p>
  //   </div>
  // )
  // return(
  //   <>
  //     {card}
  //   </>
  // )

  // render div with onClick listener by spreading props
  let events = {};
  if (selectCharacter) {
    events = {
      onClick: (e) => handleClick(e, character.id)
    }
  }

  return(
    <div key={character.id} style={containerStyles} {...events}>
      <h2>{character.name}</h2>
      <img src={`${character.thumbnail_url}`} width='300px' height='300px'></img>
      <CharacterStatsList stats={stats}/>
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