import React from 'react';
import Timer from './Timer';

function TimerContainer() {
  return(
    <div>
      <Timer startTime={10} tickValue={2}/>
      <Timer startTime={5} tickValue={20}/>
    </div>
  )
}

export default TimerContainer
