import React, { useState, useSyncExternalStore } from 'react'

const CounterWLimit = () => {
  const [text, setText] = useState("");
  const [num, setNum] = useState(0);
  
  function increaseCount() {
    if (num==10){
      setText("Max Limit Reached !")
    }
    else{
      setNum(num+1);
      setText("")
    }
  }
  function decreaseCount() {
    if (num==0){
      setText("Min Limit Reached !")
    }
    else{
      setNum(num-1);
      setText("")
    }

  }
  return (
    <div>
      Count: {num} <br />
      <button onClick={increaseCount}>Increase</button><br />
      <button onClick={decreaseCount}>Decrease</button>
      <p>{text}</p>
    </div>
  )
}

export default CounterWLimit
