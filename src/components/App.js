import React, { Component } from 'react';
import { getCharacters, Characters, User } from '../requests';
import CharacterPage from './CharacterIndex';
import NewUserForm from './NewUserForm';
import SessionCreatePage from '../Page/SessionCreatePage';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './Navbar';
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      characters: [],
      selectedCharacter: {},
      user: {} 
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

    User.current()
      .then(payload => {
        this.setState(state => {
          return {
            user: payload
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
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path='/cards/:id' render={() => <div style={{backgroundColor: 'red', width: '200px', height: '200px'}}>Red</div>} />
          <Route path='/cards' render={() => <CharacterPage characters={this.state.characters} selectCharacter={this.selectCharacter} pickedCharacter={this.state.selectedCharacter}/>}/>
          <Route path='/users/new' component={NewUserForm}/>
          <Route path='/sign_in' component={SessionCreatePage}/>
          <Route path='/' render={() => <div>Root Page</div>}/>
        </Switch>
      </BrowserRouter>
    )
  }
}

const styles = {
  container: {
    width: '100vw'
  }
}

export default App
