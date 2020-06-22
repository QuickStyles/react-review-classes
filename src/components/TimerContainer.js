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

  addTimer() {
    this.setState((state) => {
      const listCopy = JSON.parse(JSON.stringify(state.list))
      return {
        list: [
          ...listCopy, // copy of all the existing timers
          {
            currentTick: 0,
            tickValue: 1
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

  render() {
    return(
      <div>
        {
          this.state.list.map((node, i) => {
            return <Timer key={i} currentTick={node.currentTick} tickValue={node.tickValue} />
          })
        }
        {/* onClick is a synthetic event. They're just like DOM events. */}
        <button onClick={(e) => this.addTimer()}>Add Timer</button>
        <button onClick={(e) => this.removeTimer()}>Remove Timer</button>
      </div>
    )
  }
}

export default TimerContainer
