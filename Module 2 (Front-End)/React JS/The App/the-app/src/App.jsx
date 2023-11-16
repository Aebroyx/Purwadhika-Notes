// Since we use react router, we do not use app.jsx anymore and any changes made will routed in main.jsx
import { useState } from 'react'
import './App.css'
import Home from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hello World!</h1>
      <Home />
    </>
  )
}

export default App
