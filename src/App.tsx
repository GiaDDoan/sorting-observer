import { useState } from 'react'
import './App.css'

import SortingOberser from './components/SortingOberser'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <SortingOberser />
    </>
  )
}

export default App
