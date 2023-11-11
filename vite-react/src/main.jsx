import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return (
    <div>My APP</div>
  )
}
const ReactElement = {
  type: "a",
  props: {
      href: 'https://google.com',
      target: '_blank'
  },
  children: 'Click me to visit google'
}
const anotherElement = (
  <a href="https://google.com" target="_blank">Click me to visit google</a>

)

const anotherUser = "chai aur react"
const ReactElement1 = React.createElement(
  "a", 
  {
    href: 'https://google.com',
    target: '_blank'
  },
  "Click me To VISIT GOOGLE",
  anotherUser
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <MyApp/>
    {/* ReactElement() //wont work */}
    {/* MyApp() */}
    anotherElement // should have work 
    ReactElement1 // should have work 
  </React.StrictMode>,
)
