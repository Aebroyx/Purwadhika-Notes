import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Components/Navbar/Index'
import toast, { Toaster } from 'react-hot-toast';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Toaster />
      <Navbar />
      <Outlet />
    </>
  )
}

export default App
