import { useContext } from 'react';
import { AlgoContext } from '../contexts/AlgoProvider';

const Navbar = () => {
  const { settings, setSettings } = useContext(AlgoContext);

  return (
    <nav className='w-screen bg-gray-300 grid grid-flow-row'>
        <div className='flex items-center justify-center gap-4' w-full>
          <div>
            <button className='border border-teal-100 shadow-md py-2 px-4 transition-all active:scale-95'>Merge Sort</button>
            <button className='border border-teal-100 shadow-md py-2 px-4 transition-all active:scale-95'>Insertion Sort</button>
          </div>
          <button className='underline'>Sort!</button>
        </div>
        <div className='flex flex-col items-center w-full pb-3'>
          <label htmlFor="items_amount">Array Length: {settings.arrayLen}</label>
          <input
            type="range"
            name="items_amount"
            id="items_amount"
            className='w-full max-w-2xl'
            defaultValue={25}
            min={1}
          />
          <label htmlFor="delay">Delay: {settings.delay}ms</label>
          <input
            type="range"
            name="delay"
            id="delay"
            className='w-full max-w-2xl'
            defaultValue={15}
            min={3}
          />
        </div>
    </nav>
  )
}

export default Navbar