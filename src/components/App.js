import React, { Component } from 'react';
import { getCharacters, Characters } from '../requests';
import CharacterPage from './CharacterIndex';
import NewUserForm from './NewUserForm';

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
    Characters.index()
      .then(payload => {
        const charactersList = payload.characters;
        this.setState((state) => {
          return {
            characters: charactersList
          }
        })
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
        <NewUserForm/>
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
