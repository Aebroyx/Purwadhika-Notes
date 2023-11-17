import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Components/Navbar/Index'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default App
