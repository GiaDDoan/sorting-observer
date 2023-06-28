import { useState, createContext, useEffect } from 'react'
import { getInsertionSortAnims } from '../utils/InsertionSort';
import { getMergeSortAnims } from '../utils/MergeSort';

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
  setSettings?: React.Dispatch<React.SetStateAction<Settings>>,
  sort: (algoType: Algo) => void;
}

export const AlgoContext = createContext<SettingsContext>({
  settings: initVals,
  sort: () => {},
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

  const sort = (algoType: Algo) => {
    switch (algoType) {
      case 'insertion sort': {
        const [newArr, animArr] = getInsertionSortAnims(items);
        animateDivs(newArr, animArr);
        break;
      }
      case 'merge sort': {
        const aux: number[] = [];
        const animArrMerge: number[][] = [];
        const nums = [...items];
        getMergeSortAnims(nums, aux, animArrMerge, 0, items.length - 1);
        animateMerge(nums, animArrMerge);
        break;
      }
      default: {
        break;
      }
    }
  };

  const animateDivs = (newArr: number[], arr: number[][]) => {
    arr.forEach(([first, second], idx) => {
      const div = document.getElementById(`${first}`);
      const div2 = document.getElementById(`${second}`);

      if (!div || !div2) return;

      setTimeout(() => {
        div.style.backgroundColor = "#b041f0";
        div2.style.backgroundColor = "#b041f0";

        const divHeight = div.style.height;
        div.style.height = div2.style.height;
        div2.style.height = divHeight;

        setTimeout(() => {
          div.style.backgroundColor = "#482";
          div2.style.backgroundColor = "#482";

          if (idx === arr.length - 1) {
            setItems(newArr);
          }
        }, settings.delay * 3)
      }, settings.delay * idx * 3)
    });
  }

  const animateMerge = (newArr: number[], arr: number[][]) => {
    arr.forEach(([newHeight, index], idx) => {
      const div = document.getElementById(`${index}`);

      if (!div) return;
      setTimeout(() => {
        div.style.backgroundColor = "#b041f0";

        const divHeight = div.style.height;
        div.style.height = `${newHeight / 7}%`;

        setTimeout(() => {
          div.style.backgroundColor = "#482";

          if (idx === arr.length - 1) {
            setItems(newArr);
          }
        }, settings.delay * 3)
      }, settings.delay * idx * 3)
    });
  }

  return (
    <ItemsContext.Provider value={{ items, setItems}}>
      <AlgoContext.Provider value={{ settings, setSettings, sort }}>
        {children}
      </AlgoContext.Provider>
    </ItemsContext.Provider>
  )
}

export default AlgoProvider