import {useState} from 'react'

function App() {
 const [counter, setCounter] = useState(15)
  // let counter  = 13;
  const addValue = () => {
    console.log("addvalue")
    // counter++
    //setCounter(counter++)// dont use postincrement
    // setCounter(++counter) // dont use this too if using constant
    setCounter(counter + 1)
    // setCounter(counter + 1)
    // setCounter(counter + 1)
    setCounter((prevCounter)=> prevCounter + 1)
  }
  let removeValue ;
  if(counter > 0){
 removeValue = () => {
    console.log("removevalue")
    setCounter(counter - 1)
  }
}
  return (
    <>
    <div>
      <h1>Vite + React With Arif Akhtar</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove Value {counter}</button>
      <footer>footer: {counter}</footer>
    </div>
    </>
  )
}

export default App
