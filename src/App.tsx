import './App.css'

import SortingOberser from './components/SortingOberser'
import Navbar from './components/Navbar'

function App() {
  return (
    <main className='grid grid-rows-6 bg-gray-100'>
      <SortingOberser />
      <Navbar />
    </main>
  )
}

export default App
