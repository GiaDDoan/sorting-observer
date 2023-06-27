import { useContext } from 'react';
import { Algo, AlgoContext } from '../contexts/AlgoProvider';

const Navbar = () => {
  const { settings, setSettings } = useContext(AlgoContext);

  const onArrayChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    if(!setSettings) return;
    setSettings(p => ({ ...p, arrayLen: +e.target.value * 5 }));
  }

  const onDelayChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    if(!setSettings) return;
    setSettings(p => ({ ...p, delay: +e.target.value }))
  }

  const onClickSelect = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    type: Algo
  ) => {
    if(!setSettings) return;
    setSettings(p => ({ ...p, algoType: type }));
  }

  return (
    <nav className='w-screen bg-gray-300 grid grid-flow-row'>
        <div className='flex items-center justify-center gap-4' w-full>
          <div>
            <button
              className={`border border-teal-100 shadow-md py-2 px-4 transition-all active:scale-95 ${settings.algoType === "merge sort" && "text-red-500"}`}
              onClick={(e) => onClickSelect(e, "merge sort")}
            >
              Merge Sort
            </button>
            <button
              className={`border border-teal-100 shadow-md py-2 px-4 transition-all active:scale-95 ${settings.algoType === "insertion sort" && "text-red-500"}`}
              onClick={(e) => onClickSelect(e, "insertion sort")}
            >
              Insertion Sort
            </button>
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
            onChange={onArrayChange}
          />
          <label htmlFor="delay">Delay: {settings.delay}ms</label>
          <input
            type="range"
            name="delay"
            id="delay"
            className='w-full max-w-2xl'
            defaultValue={15}
            min={3}
            onChange={onDelayChange}
          />
        </div>
    </nav>
  )
}

export default Navbar