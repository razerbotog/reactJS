import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  const myObject = {
    name: "John",
    age: 22,
    city: "New York"
  };
  

  return (
    <>
      <h1 className='bg-slate-500 text-black p-4 rounded-xl my-3'>Tailwind Test</h1>
      <Card name="arif" arr="[1,2,3,4,5]" someObj="22" btntext="click me"/>
      <Card name={myObject.name} someObj={myObject.age} btntext="visit me"/>
      <Card name={myObject.name} someObj={myObject.age}/>
    </>
  )
}

export default App
