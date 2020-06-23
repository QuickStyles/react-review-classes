import React, { Component } from 'react';
import { getCharacters } from '../requests';
import CharacterPage from './CharacterIndex';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      characters: [],
      selectedCharacter: {}
    }
    this.selectCharacter = this.selectCharacter.bind(this)
  }

  componentDidMount() {
    // send fetch(ajax) request
    getCharacters()
      .then(payload => {
        const characters = payload.data.results // Array of all the characters
        this.setState((state) => {
          return {
            characters: characters
          }
        })
      })
      .catch(err => {
        console.log(err);
      })
  }

  selectCharacter(id) {
    // id will be a nubmer like 1112312
    const foundCharacter = this.state.characters.filter((char) => {
      return char.id === id
    })[0]
    if(foundCharacter) {
      this.setState((state) => {
        return {
          selectedCharacter: foundCharacter
        }
      })
    }
  }

  render() {
    return(
      <div style={styles.container}>
        <CharacterPage characters={this.state.characters} selectCharacter={this.selectCharacter} pickedCharacter={this.state.selectedCharacter}/>
      </div>
    )
  }
}

const styles = {
  container: {
    width: '100vw'
  }
}

export default App
