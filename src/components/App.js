import React, { Component } from 'react';
import { getCharacters } from '../requests';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // send fetch(ajax) request
    getCharacters()
      .then(payload => console.log(payload))
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    return(
      <div>Hello World</div>
    )
  }
}

export default App
