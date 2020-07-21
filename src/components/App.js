import React, { Component } from 'react';
import { getCharacters, Characters, User } from '../requests';
import CharacterPage from './CharacterIndex';
import NewUserForm from './NewUserForm';
import SessionCreatePage from '../Page/SessionCreatePage';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './Navbar';
import CreateDeckPage from '../Page/CreateDeckPage';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      characters: [],
      selectedCharacter: {},
      user: {} 
    }
    this.selectCharacter = this.selectCharacter.bind(this)
    this.getCurrentUser = this.getCurrentUser.bind(this)
  }

  componentDidMount() {
    // send fetch(ajax) request
    Characters.index()
      .then(payload => {
        const charactersList = payload.cards;
        this.setState((state) => {
          return {
            characters: charactersList
          }
        })
      })

    this.getCurrentUser();
      
  }

  getCurrentUser() {
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
        <Navbar user={ this.state.user }/>
        <Switch>
          <Route path='/cards/:id' render={() => <div style={{backgroundColor: 'red', width: '200px', height: '200px'}}>Red</div>} />
          <Route path='/cards' render={() => <CharacterPage characters={this.state.characters} selectCharacter={this.selectCharacter} pickedCharacter={this.state.selectedCharacter}/>}/>
          <Route path='/users/new' component={NewUserForm}/>
          <Route path='/sign_in' render={(routeProps) => <SessionCreatePage getCurrentUser={this.getCurrentUser} {...routeProps} />}/>
          <Route path='/decks/new' render={() => <CreateDeckPage availableCards={this.state.characters}/> } />
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
