import { useState } from 'react'
import './App.css'

import SortingOberser from './components/SortingOberser'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='grid grid-rows-6 bg-gray-100'>
      <Navbar />
      <SortingOberser />
    </main>
  )
}

export default App
