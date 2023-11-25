import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(1)

  // let counter = 1

  // Add Value by 1
  const addValue = () => {
    if(counter<=19){
    console.log("added value", counter);
    setCounter(counter + 1)
  }else{
    alert("Can't be added values further")
  }
  }

  // Remove Value by 1
  const removeValue = () => {
    if(counter>=1){
    setCounter(counter - 1)
    console.log("removed value", counter);
    }
    else{
      alert("Can't be removed values further");
    }
  }


  return (
    <>

      <h1>React + Vite Counter</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add Value</button>

      <br></br>

      <button onClick={removeValue}>Remove Value</button>
      <p>My project counter value: {counter}</p>

    </>
  )
}

export default App
