// Since we use react router, we do not use app.jsx anymore and any changes made will routed in main.jsx
import { useState } from 'react'
// import './App.css'

import { Outlet } from 'react-router-dom'
import Navbar from './Components/navbar.jsx'
import Footer from './Components/Footer.jsx'
import Navbar2 from './Components/Navbar2.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Navbar /> */}
      <Navbar2 />
      <Outlet />
      {/* <Footer /> */}
    </>
  )
}

export default App
