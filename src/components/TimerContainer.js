import React, { Component } from 'react';
import Timer from './Timer';

class TimerContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [
        {
          currentTick: 10,
          tickValue: 2
        },
        {
          currentTick: 5,
          tickValue: 20
        }
      ]
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  tick() {
    this.setState((state) => {
      // const listCopy = [...state.list]
      const listCopy = JSON.parse(JSON.stringify(state.list)) // copies state.list
      const newList = listCopy.map((node) => { // creates a new array where every node's currentTick is increased by tickValue
        return {
          currentTick: node.currentTick + node.tickValue,
          tickValue: node.tickValue
        }
      })
      // merge this object into the state
      return {
        list: newList
      }
    })
  }

  addTimer(startTime=10, tickValue=10) {
    startTime = parseInt(startTime);
    tickValue = parseInt(tickValue);
    // if startTime or tickValue are not a number greater than 0 set the values of them to 1
    if(!startTime) {
      startTime = 1;
    }
    if(!tickValue) {
      tickValue = 1;
    }
    this.setState((state) => {
      const listCopy = JSON.parse(JSON.stringify(state.list))
      return {
        list: [
          ...listCopy, // copy of all the existing timers
          {
            currentTick: startTime,
            tickValue: tickValue
          }
        ]
      }
    })
  }

  removeTimer() {
    this.setState((state) => {
      const listCopy = JSON.parse(JSON.stringify(state.list))
      listCopy.pop();
      return {
        list: listCopy
      }
    })
  }

  componentDidMount() {
    setInterval(
      () => this.tick(),
      1000
    )
  }

  handleSubmit(e) {
    console.log('handle submit called');
    e.preventDefault();
    const currentTarget = e.currentTarget;
    const formData = new FormData(currentTarget);
    this.addTimer();
  }

  render() {
    return(
      <div>
        {
          this.state.list.map((node, i) => {
            return <Timer key={i} currentTick={node.currentTick} tickValue={node.tickValue} />
          })
        }
        {/* onClick is a synthetic event. They're just like DOM events. */}
        <button onClick={(e) => this.removeTimer()}>Remove Timer</button>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='currentTick'>Current Tick</label>
          <input name='currentTick'></input>
          <label htmlFor='tickValue'>Tick Value</label>
          <input name='tickValue'></input>
          <input type='submit' value='Add Timer'></input>
        </form>
      </div>
    )
  }
}

export default TimerContainer
