import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Components/Navbar/Index'
import Footer from './Components/Footer/Index';

import toast, { Toaster } from 'react-hot-toast';

import { userDataContext } from './Context/userDataContext';

function App() {
  const [userData, setUserData] = useState(null);

  return (
    <userDataContext.Provider value={{ userData, setUserData }}>
    <>
      <Toaster />
      <Navbar />
      <Outlet />
      <Footer />
    </>
    </userDataContext.Provider>
  )
}

export default App
