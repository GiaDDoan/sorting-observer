import { useState, createContext, useEffect } from 'react'

const initVals: Settings = {
  algoType: 'merge sort',
  arrayLen: 25,
  delay: 15
}

export type Algo = "merge sort" | "insertion sort";

interface Settings {
  algoType: Algo;
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

type Items = {
  items: number[],
  setItems?: React.Dispatch<React.SetStateAction<number[]>>,
}

export const ItemsContext = createContext<Items>({ items: [] });

interface Props {
  children: React.ReactNode;
}

const AlgoProvider: React.FC<Props> = ({ children }) => {
  const [settings, setSettings] = useState<Settings>(initVals);
  const [items, setItems] = useState<number[]>([]);

  useEffect(() => {
    const randomNums = [];
    for (let i = 0; i < settings.arrayLen; i++) {
      randomNums.push(Math.floor(Math.random() * 540));
    }

    setItems(randomNums);
  }, [settings.arrayLen])

  return (
    <ItemsContext.Provider value={{ items, setItems}}>
      <AlgoContext.Provider value={{ settings, setSettings}}>
        {children}
      </AlgoContext.Provider>
    </ItemsContext.Provider>
  )
}

export default AlgoProvider