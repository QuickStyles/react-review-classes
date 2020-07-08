import React from 'react';

// props.stats = [durability, strength, ect]
function CharacterStatsList(props) {
  const statsList = props.stats;
  // let stats = []
  // for (let key in statsList) {
  //   stats.push(
  //       <div key={key}>{key}:  {statsList[key]}</div>
  //   )
  // }
  const stats = Object.keys(statsList).map(key => {
    return <div key={key} title={key} style={{...styles.circle, ...styles[key]}}><p style={styles.text}>{statsList[key]}</p></div>
  })

  return <div style={styles.container}> { stats } </div>
}

export default CharacterStatsList;

const styles = {
  container: {
    display: 'flex',
  },
  circle: {
    height: '50px',
    width: '50px',
    borderRadius: '25px',
    backgroundColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    textAlign: 'center'
  },
  strength: {
    backgroundColor: 'red'
  },
  speed: {
    backgroundColor: 'yellow'
  },
  durability: {
    backgroundColor: 'darkgrey'
  },
  fighting: {
    backgroundColor: 'orange'
  },
  intelligence: {
    backgroundColor: 'skyblue'
  },
  energy: {
    backgroundColor: 'pink'
  }
}