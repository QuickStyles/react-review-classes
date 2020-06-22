import React, { Component } from 'react';

// Class Components VS Functional Components:

// Class
// - access to state
// - access to lifecycle methods

// Functional
// - Simpler

class Timer extends Component {
  // constructor method gets called everytime an instance of the class is created
  constructor(props) {
    // in react the constructor always takes in a props object.
    // we must always call super(props);
    super(props);

    // State allows an individual instance of a component to hold their own data.
    this.state = {
      seconds: 0
    }
  }

  tick() {
    // if you need to update the state you can only use this.setState
    this.setState((state) => {
      // state is the current state of the component
      // setState should always return an object. This object gets merged into the current state.
      return {
        seconds: state.seconds + 1
      }
    })
  }

  // this method gets triggered when the component (node) mounts onto the DOM
  componentDidMount() {
    setInterval(() => {
      this.tick();
    }, 1000)
  }

  // Class Components use the render() method to return JSX
  // we have access to the state by calling this.state
  render() {
    console.log('rendering...' + ' ' + this.state.seconds)
    return(
      <div>
        { this.state.seconds }
      </div>
    )
  }
}

export default Timer
