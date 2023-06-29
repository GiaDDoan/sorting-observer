import { useContext } from 'react';
import { Algo, AlgoContext } from '../contexts/AlgoProvider';
import NavButtons from './NavButton';

const Navbar = () => {
  const { settings, setSettings, sort } = useContext(AlgoContext);

  const onArrayChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    if(!setSettings) return;
    setSettings(p => ({ ...p, arrayLen: +e.target.value * 5 }));
  }

  const onDelayChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    if(!setSettings) return;
    setSettings(p => ({ ...p, delay: +e.target.value }))
  }

  const onAlgoChange = (
    type: Algo
  ) => {
    if(!setSettings) return;
    setSettings(p => ({ ...p, algoType: type }));
  }

  return (
    <nav className='w-screen bg-gray-300 grid grid-flow-row'>
      <NavButtons onAlgoChange={onAlgoChange} settings={settings} sort={sort} />
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
        <label htmlFor="delay">Delay: {settings.delay}</label>
        <input
          type="range"
          name="delay"
          id="delay"
          className='w-full max-w-2xl'
          defaultValue={15}
          min={1}
          onChange={onDelayChange}
        />
      </div>
    </nav>
  )
}

export default Navbar