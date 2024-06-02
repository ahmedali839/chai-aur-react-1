import { useState } from 'react'
import './App.css'
// import UserContext from './Context/UserContext'
import Login from './Components/Login'
import Profile from './Components/Profile'
import UserContextProvider from './Context/UserContextProvider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
    
<Login /> 
<Profile />

    </UserContextProvider>
  )
}

export default App
