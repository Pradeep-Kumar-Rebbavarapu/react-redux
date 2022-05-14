import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import UserView from './features/user/UserView'
import CakeView from './features/cake/CakeView'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <CakeView/>
      <hr />
      <UserView/>
    </div>
  )
}

export default App