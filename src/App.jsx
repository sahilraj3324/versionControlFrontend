import { useState } from 'react'
import './App.css'
import {Button} from "./components/ui/button"
import Signup from './components/auth/Signup'
import Login from './components/auth/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Signup />
    <br></br>
      <Login />
    </>
  )
}

export default App
