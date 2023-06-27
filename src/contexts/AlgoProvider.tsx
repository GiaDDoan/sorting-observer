import { useState, createContext } from 'react'

const initVals: Settings = {
  algoType: 'merge sort',
  arrayLen: 25,
  delay: 15
}

interface Settings {
  algoType: 'merge sort' | 'insertion sort';
  arrayLen: number;
  delay: number;
}

type SettingsContext = {
  settings: Settings,
  setSettings?: React.Dispatch<React.SetStateAction<Settings>>
}

export const AlgoContext = createContext<SettingsContext>({
  settings: initVals 
});

interface Props {
  children: React.ReactNode;
}

const AlgoProvider: React.FC<Props> = ({ children }) => {
  const [settings, setSettings] = useState<Settings>(initVals);

  return (
    <AlgoContext.Provider value={{ settings, setSettings}}>
      {children}
    </AlgoContext.Provider>
  )
}

export default AlgoProvider