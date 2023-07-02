import { useState, createContext, useEffect } from 'react'
import { getInsertionSortAnims } from '../utils/algorithms/insertionSort';
import { getMergeSortAnims } from '../utils/algorithms/mergeSort';
import { getHeapSortAnims } from '../utils/algorithms/heapSort';
import { getQuickSortAnims } from '../utils/algorithms/quickSort';
import { Algo, ISettingsContext, Items, Settings } from './AlgoProdiver.types';
import { animateDivs, animateMerge } from '../utils/animations/animate';

const initVals: Settings = {
  algoType: 'merge sort',
  arrayLen: 25,
  delay: 15
}

export const AlgoContext = createContext<ISettingsContext>({
  settings: initVals,
  sort: () => {},
  resetArray: () => {},
});


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

  const resetArray = () => {
    const randomNums = [];
    for (let i = 0; i < settings.arrayLen; i++) {
      randomNums.push(Math.floor(Math.random() * 540));
    }

    setItems(randomNums);
  }

  const sort = (algoType: Algo) => {
    switch (algoType) {
      case 'insertion sort': {
        const { newArr, animArr } = getInsertionSortAnims(items);
        animateDivs({ newArr, arr: animArr, setItems, settings });
        break;
      }
      case 'merge sort': {
        const aux: number[] = [];
        const arr: number[][] = [];
        const nums = [...items];
        getMergeSortAnims(nums, aux, arr, 0, items.length - 1);
        animateMerge({ newArr: nums, arr, setItems, settings });
        break;
      }
      case "heap sort": {
        const { heapSorted, heapSortAnims } = getHeapSortAnims(items);
        animateDivs({
          newArr: heapSorted,
          arr: heapSortAnims,
          setItems,
          settings,
        });
        break;
      }
      case "quick sort": {
        const { quickSorted, quickSortAnims } = getQuickSortAnims(items);
        animateDivs({
          newArr: quickSorted,
          arr: quickSortAnims,
          setItems,
          settings,
        });
        break;
      }
    }
  };

  return (
    <ItemsContext.Provider value={{ items, setItems}}>
      <AlgoContext.Provider value={{ settings, setSettings, sort, resetArray }}>
        {children}
      </AlgoContext.Provider>
    </ItemsContext.Provider>
  )
}

export default AlgoProvider