import React, { Component } from 'react';
import CharacterList from './CharacterList';
import { getCharacters } from '../requests';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      characters: []
    }
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

  render() {
    return(
      <div>
        <CharacterList characters={this.state.characters}/>
      </div>
    )
  }
}

export default App
